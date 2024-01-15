import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";

it("returns a 404 if the book is not found", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app).get(`/api/books/${id}`).send().expect(404);
});

it("returns the book if the book is found ", async () => {
  const title = "first book";
  const price = 20;

  const response = await request(app)
    .post("/api/books")
    .set("Cookie", global.signin())
    .send({ title, price })
    .expect(201);

  const bookResponse = await request(app)
    .get(`/api/books/${response.body.id}`)
    .send()
    .expect(200);

  expect(bookResponse.body.title).toEqual(title);
  expect(bookResponse.body.price).toEqual(price);
});
