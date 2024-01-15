import { Message } from "node-nats-streaming";
import { Listener, OrderCreatedEvent, Subjects } from "@books-am/common";
import { queueGroupName } from "./queue-group-name";
import { Book } from "../../models/book";
import { BookUpdatedPublisher } from "../publishers/book-updated-publisher";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    const book = await Book.findById(data.book.id);

    if (!book) {
      throw new Error("Book not found");
    }

    book.set({ orderId: data.id });
    await book.save();

    await new BookUpdatedPublisher(this.client).publish({
      id: book.id,
      price: book.price,
      title: book.title,
      userId: book.userId,
      orderId: book.orderId,
      version: book.version,
    });

    msg.ack();
  }
}
