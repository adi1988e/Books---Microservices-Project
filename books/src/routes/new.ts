import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireAuth, validateRequest } from "@books-am/common";
import { Book } from "../models/book";
import { BookCreatedPublisher } from "../events/publishers/book-created-publisher";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.post(
  "/api/books",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, price } = req.body;
    const book = Book.build({
      title,
      price,
      userId: req.currentUser!.id,
    });
    await book.save();
    await new BookCreatedPublisher(natsWrapper.client).publish({
      id: book.id,
      title: book.title,
      price: book.price,
      userId: book.userId,
      version: book.version,
    });

    res.status(201).send(book);
  }
);

export { router as createBookRouter };
