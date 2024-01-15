import { Message } from "node-nats-streaming";
import mongoose from "mongoose";
import { BookCreatedEvent } from "@books-am/common";
import { natsWrapper } from "../../../nats-wrapper";
import { BookCreatedListener } from "../book-created-listener";
import { Book } from "../../../models/book";

const setup = async () => {
  const listener = new BookCreatedListener(natsWrapper.client);

  const data: BookCreatedEvent["data"] = {
    version: 0,
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "book",
    price: 20,
    userId: new mongoose.Types.ObjectId().toHexString(),
  };
  // create fake message object
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };
  return { listener, data, msg };
};

it("creates and saves a book", async () => {
  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const book = await Book.findById(data.id);

  expect(book).toBeDefined();
  expect(book!.title).toEqual(data.title);
  expect(book!.price).toEqual(data.price);
});

it("acks the message", async () => {
  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});
