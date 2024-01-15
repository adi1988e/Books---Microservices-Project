import { Publisher } from "./base-publisher";
import { BookCreatedEvent } from "./book-created-event";
import { Subjects } from "./subjects";

export class BookCreatedPublisher extends Publisher<BookCreatedEvent> {
  subject: Subjects.BookCreated = Subjects.BookCreated;
}
