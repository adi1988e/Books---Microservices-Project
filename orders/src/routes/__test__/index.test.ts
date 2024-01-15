import request from "supertest";
import { app } from "../../app";
import { Order } from "../../models/order";
import { Book } from "../../models/book";
import mongoose from "mongoose";

const buildBook = async () => {
  const book = Book.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "new book",
    price: 20,
  });
  await book.save();
  return book;
};

it("fetches orders for an particular user", async () => {
  // Create three books
  const bookOne = await buildBook();
  const bookTwo = await buildBook();
  const bookThree = await buildBook();

  const userOne = global.signin();
  const userTwo = global.signin();
  // Create one order as User #1
  await request(app)
    .post("/api/orders")
    .set("Cookie", userOne)
    .send({ bookId: bookOne.id })
    .expect(201);

  // Create two orders as User #2
  const { body: orderOne } = await request(app)
    .post("/api/orders")
    .set("Cookie", userTwo)
    .send({ bookId: bookTwo.id })
    .expect(201);
  const { body: orderTwo } = await request(app)
    .post("/api/orders")
    .set("Cookie", userTwo)
    .send({ bookId: bookThree.id })
    .expect(201);

  // Make request to get orders for User #2
  const response = await request(app)
    .get("/api/orders")
    .set("Cookie", userTwo)
    .expect(200);

  // Make sure we only got the orders for User #2
  expect(response.body.length).toEqual(2);
  expect(response.body[0].id).toEqual(orderOne.id);
  expect(response.body[1].id).toEqual(orderTwo.id);
  expect(response.body[0].book.id).toEqual(bookTwo.id);
  expect(response.body[1].book.id).toEqual(bookThree.id);
});
