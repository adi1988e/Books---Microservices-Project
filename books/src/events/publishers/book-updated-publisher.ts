import { Publisher, Subjects, BookUpdatedEvent } from "@books-am/common";

export class BookUpdatedPublisher extends Publisher<BookUpdatedEvent> {
  subject: Subjects.BookUpdated = Subjects.BookUpdated;
}
