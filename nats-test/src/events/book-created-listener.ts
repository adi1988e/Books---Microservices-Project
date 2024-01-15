import { Message } from "node-nats-streaming";
import { Listener } from "./base-listener";
import { BookCreatedEvent } from "./book-created-event";
import { Subjects } from "./subjects";

export class BookCreatedListener extends Listener<BookCreatedEvent> {
  readonly subject = Subjects.BookCreated;
  queueGroupName = "payments-service";

  onMessage(data: BookCreatedEvent["data"], msg: Message) {
    console.log("Event data!", data);

    console.log(data.id);
    console.log(data.title);
    console.log(data.price);

    msg.ack();
  }
}
