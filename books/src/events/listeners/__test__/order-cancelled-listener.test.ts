import mongoose from "mongoose";
import { Message } from "node-nats-streaming";
import { OrderCancelledEvent } from "@books-am/common";
import { natsWrapper } from "../../../nats-wrapper";
import { OrderCancelledListener } from "../order-cancelled-listener";
import { Book } from "../../../models/book";

const setup = async () => {
  const listener = new OrderCancelledListener(natsWrapper.client);

  const orderId = new mongoose.Types.ObjectId().toHexString();
  const book = Book.build({
    title: "concert",
    price: 20,
    userId: "asdf",
  });
  book.set({ orderId });
  await book.save();

  const data: OrderCancelledEvent["data"] = {
    id: orderId,
    version: 0,
    book: {
      id: book.id,
    },
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { msg, data, book, orderId, listener };
};

it("updates the book, publishes an event, and acks the message", async () => {
  const { msg, data, book, orderId, listener } = await setup();

  await listener.onMessage(data, msg);

  const updatedBook = await Book.findById(book.id);
  expect(updatedBook!.orderId).not.toBeDefined();
  expect(msg.ack).toHaveBeenCalled();
  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
