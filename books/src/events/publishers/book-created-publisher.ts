import { Publisher, Subjects, BookCreatedEvent } from "@books-am/common";

export class BookCreatedPublisher extends Publisher<BookCreatedEvent> {
  subject: Subjects.BookCreated = Subjects.BookCreated;
}
