import mongoose from "mongoose";
import express, { Request, Response } from "express";
import {
  NotFoundError,
  OrderStatus,
  requireAuth,
  validateRequest,
  BadRequestError,
} from "@books-am/common";
import { body } from "express-validator";
import { Book } from "../models/book";
import { Order } from "../models/order";
import { natsWrapper } from "../nats-wrapper";
import { OrderCreatedPublisher } from "../events/publishers/order-created-publisher";

const router = express.Router();

const EXPIRATION_WINDOW_SECONDS = 15 * 60;

router.post(
  "/api/orders",
  requireAuth,
  [
    body("bookId")
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage("BookId must be provided"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { bookId } = req.body;

    const book = await Book.findById(bookId);

    if (!book) {
      throw new NotFoundError();
    }

    const isReserved = await book.isReserved();

    if (isReserved) {
      throw new BadRequestError("Book is already reserved");
    }

    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + EXPIRATION_WINDOW_SECONDS);

    const order = Order.build({
      userId: req.currentUser!.id,
      status: OrderStatus.Created,
      expiresAt: expiration,
      book,
    });
    await order.save();

    new OrderCreatedPublisher(natsWrapper.client).publish({
      id: order.id,
      version: order.version,
      status: order.status,
      userId: order.userId,
      expiresAt: order.expiresAt.toISOString(),
      book: {
        id: book.id,
        price: book.price,
      },
    });

    res.status(201).send(order);
  }
);

export { router as newOrderRouter };
