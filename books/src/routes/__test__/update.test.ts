import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";
import { natsWrapper } from "../../nats-wrapper";
import { Book } from "../../models/book";

it("returns a 404 if the provided id does not exist", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/books/${id}`)
    .set("Cookie", global.signin())
    .send({
      title: "kjuhkjhb",
      price: 20,
    })
    .expect(404);
});

it("returns a 401 if the user is not authenticated", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/books/${id}`)
    .send({
      title: "kjuhkjhb",
      price: 20,
    })
    .expect(401);
});

it("returns a 401 if the user does not own the book", async () => {
  const response = await request(app)
    .post("/api/books")
    .set("Cookie", global.signin())
    .send({
      title: "fdgvsdf",
      price: 20,
    });

  await request(app)
    .put(`/api/books/${response.body.id}`)
    .set("Cookie", global.signin())
    .send({
      title: "fdgvfffsdf",
      price: 50,
    })
    .expect(401);
});

it("returns a 400 if the user provides an invalid title or price", async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post("/api/books")
    .set("Cookie", cookie)
    .send({
      title: "fdgvsdf",
      price: 20,
    });

  await request(app)
    .put(`/api/books/${response.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "",
      price: 20,
    })
    .expect(400);

  await request(app)
    .put(`/api/books/${response.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "jkhbjhbgjuhv",
      price: -20,
    })
    .expect(400);
});

it("updates the book provided valid inputs", async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post("/api/books")
    .set("Cookie", cookie)
    .send({
      title: "fdgvsdf",
      price: 20,
    });

  await request(app)
    .put(`/api/books/${response.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "new title",
      price: 70,
    })
    .expect(200);

  const bookResponse = await request(app)
    .get(`/api/books/${response.body.id}`)
    .send();

  expect(bookResponse.body.title).toEqual("new title");
  expect(bookResponse.body.price).toEqual(70);
});

it("publishes an event", async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post("/api/books")
    .set("Cookie", cookie)
    .send({
      title: "book 2",
      price: 30,
    });

  await request(app)
    .put(`/api/books/${response.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "new title",
      price: 100,
    })
    .expect(200);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});

it("rejects updates if the book is reserved", async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post("/api/books")
    .set("Cookie", cookie)
    .send({
      title: "asldkfj",
      price: 20,
    });

  const book = await Book.findById(response.body.id);
  book!.set({ orderId: new mongoose.Types.ObjectId().toHexString() });
  await book!.save();

  await request(app)
    .put(`/api/books/${response.body.id}`)
    .set("Cookie", cookie)
    .send({
      title: "new title",
      price: 100,
    })
    .expect(400);
});
