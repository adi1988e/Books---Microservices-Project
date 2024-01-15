import { Message } from "node-nats-streaming";
import mongoose from "mongoose";
import { OrderCreatedEvent, OrderStatus } from "@books-am/common";
import { OrderCreatedListener } from "../order-created-listener";
import { natsWrapper } from "../../../nats-wrapper";
import { Book } from "../../../models/book";

const setup = async () => {
  // Create an instance of the listener
  const listener = new OrderCreatedListener(natsWrapper.client);

  // Create and save a book
  const book = Book.build({
    title: "concert",
    price: 99,
    userId: "asdf",
  });
  await book.save();

  // Create the fake data event
  const data: OrderCreatedEvent["data"] = {
    id: new mongoose.Types.ObjectId().toHexString(),
    version: 0,
    status: OrderStatus.Created,
    userId: "alskdfj",
    expiresAt: "alskdjf",
    book: {
      id: book.id,
      price: book.price,
    },
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, book, data, msg };
};

it("sets the userId of the book", async () => {
  const { listener, book, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const updatedBook = await Book.findById(book.id);

  expect(updatedBook!.orderId).toEqual(data.id);
});

it("acks the message", async () => {
  const { listener, book, data, msg } = await setup();
  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});

it("publishes a book updated event", async () => {
  const { listener, book, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(natsWrapper.client.publish).toHaveBeenCalled();

  const bookUpdatedData = JSON.parse(
    (natsWrapper.client.publish as jest.Mock).mock.calls[0][1]
  );

  expect(data.id).toEqual(bookUpdatedData.orderId);
});
