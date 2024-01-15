import mongoose from "mongoose";
import { Message } from "node-nats-streaming";
import { BookUpdatedListener } from "../book-updated-listener";
import { BookUpdatedEvent } from "@books-am/common";
import { natsWrapper } from "../../../nats-wrapper";
import { Book } from "../../../models/book";

const setup = async () => {
  const listener = new BookUpdatedListener(natsWrapper.client);

  const book = Book.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "book",
    price: 20,
  });
  await book.save();

  const data: BookUpdatedEvent["data"] = {
    id: book.id,
    version: book.version + 1,
    title: "Book",
    price: 50,
    userId: "ablskdjf",
  };

  // Create a fake msg object
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  // return all of this stuff
  return { msg, data, book, listener };
};

it("finds, updates, and saves a book", async () => {
  const { msg, data, book, listener } = await setup();

  await listener.onMessage(data, msg);

  const updatedBook = await Book.findById(book.id);

  expect(updatedBook!.title).toEqual(data.title);
  expect(updatedBook!.price).toEqual(data.price);
  expect(updatedBook!.version).toEqual(data.version);
});

it("acks the message", async () => {
  const { msg, data, listener } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});

it("does not call ack if the event has a skipped version number", async () => {
  const { msg, data, listener, book } = await setup();

  data.version = 10;

  try {
    await listener.onMessage(data, msg);
  } catch (err) {}

  expect(msg.ack).not.toHaveBeenCalled();
});
