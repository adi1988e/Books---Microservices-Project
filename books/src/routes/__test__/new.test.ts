import request from "supertest";
import { app } from "../../app";
import { Book } from "../../models/book";
import { natsWrapper } from "../../nats-wrapper";

it("has a route handler listening to /api/books for post request", async () => {
  const response = await request(app).post("/api/books").send({});

  expect(response.status).not.toEqual(404);
});
it("can only be accessed if the user is sign in", async () => {
  await request(app).post("/api/books").send({}).expect(401);
});
it("returns a status other than 401 if the user is signed in", async () => {
  const response = await request(app)
    .post("/api/books")
    .set("Cookie", global.signin())
    .send({});
  expect(response.status).not.toEqual(401);
});
it("returns an error if an invalid title ia provided", async () => {
  await request(app)
    .post("/api/books")
    .set("Cookie", global.signin())
    .send({
      title: "",
      price: 10,
    })
    .expect(400);

  await request(app)
    .post("/api/books")
    .set("Cookie", global.signin())
    .send({
      price: 10,
    })
    .expect(400);
});
it("returns an error if an invalid price ia provided", async () => {
  await request(app)
    .post("/api/books")
    .set("Cookie", global.signin())
    .send({
      title: "Book number 1",
      price: -10,
    })
    .expect(400);

  await request(app)
    .post("/api/books")
    .set("Cookie", global.signin())
    .send({
      title: "Book number 1",
    })
    .expect(400);
});
it("creates a book with valid inputs", async () => {
  let books = await Book.find({});
  expect(books.length).toEqual(0);

  const title = "a first book";

  await request(app)
    .post("/api/books")
    .set("Cookie", global.signin())
    .send({
      title,
      price: 50,
    })
    .expect(201);

  books = await Book.find({});
  expect(books.length).toEqual(1);
  expect(books[0].price).toEqual(50);
  expect(books[0].title).toEqual(title);
});

it("publish an event", async () => {
  const title = "nice book";

  await request(app)
    .post("/api/books")
    .set("Cookie", global.signin())
    .send({
      title,
      price: 20,
    })
    .expect(201);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
