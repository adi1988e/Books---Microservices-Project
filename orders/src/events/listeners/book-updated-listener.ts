import { Message } from "node-nats-streaming";
import {
  Subjects,
  Listener,
  BookUpdatedEvent,
  NotFoundError,
} from "@books-am/common";
import { Book } from "../../models/book";
import { queueGroupName } from "./queue-group-name";

export class BookUpdatedListener extends Listener<BookUpdatedEvent> {
  subject: Subjects.BookUpdated = Subjects.BookUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: BookUpdatedEvent["data"], msg: Message) {
    const book = await Book.findByEvent(data);

    if (!book) {
      throw new Error("Book not found");
    }

    const { title, price } = data;
    book.set({ title, price });
    await book.save();

    msg.ack();
  }
}
