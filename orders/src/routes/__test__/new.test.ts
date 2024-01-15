import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";
import { Order, OrderStatus } from "../../models/order";
import { Book } from "../../models/book";
import { natsWrapper } from "../../nats-wrapper";

it("returns an error if the book does not exist", async () => {
  const bookId = new mongoose.Types.ObjectId();

  await request(app)
    .post("/api/orders")
    .set("Cookie", global.signin())
    .send({ bookId })
    .expect(404);
});

it("returns an error if the book already reserved", async () => {
  const book = Book.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "new book",
    price: 20,
  });
  await book.save();

  const order = Order.build({
    book,
    userId: "jhybgkhgv",
    status: OrderStatus.Created,
    expiresAt: new Date(),
  });
  await order.save();

  await request(app)
    .post("/api/orders")
    .set("Cookie", global.signin())
    .send({
      bookId: book.id,
    })
    .expect(400);
});

it("reserves a book", async () => {
  const book = Book.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "book",
    price: 20,
  });
  await book.save();

  await request(app)
    .post("/api/orders")
    .set("Cookie", global.signin())
    .send({ bookId: book.id })
    .expect(201);
});

it("emits an order created event", async () => {
  const book = Book.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "new book",
    price: 20,
  });
  await book.save();

  await request(app)
    .post("/api/orders")
    .set("Cookie", global.signin())
    .send({ bookId: book.id })
    .expect(201);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
