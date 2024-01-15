import { Message } from "node-nats-streaming";
import { Subjects, Listener, BookCreatedEvent } from "@books-am/common";
import { Book } from "../../models/book";
import { queueGroupName } from "./queue-group-name";

export class BookCreatedListener extends Listener<BookCreatedEvent> {
  subject: Subjects.BookCreated = Subjects.BookCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: BookCreatedEvent["data"], msg: Message) {
    const { id, title, price } = data;
    const book = Book.build({
      id,
      title,
      price,
    });
    await book.save();

    msg.ack();
  }
}
