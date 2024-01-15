import { Listener, OrderCancelledEvent, Subjects } from "@books-am/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Book } from "../../models/book";
import { BookUpdatedPublisher } from "../publishers/book-updated-publisher";

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCancelledEvent["data"], msg: Message) {
    const book = await Book.findById(data.book.id);

    if (!book) {
      throw new Error("Book not found");
    }

    book.set({ orderId: undefined });
    await book.save();
    await new BookUpdatedPublisher(this.client).publish({
      id: book.id,
      orderId: book.orderId,
      userId: book.userId,
      price: book.price,
      title: book.title,
      version: book.version,
    });

    msg.ack();
  }
}
