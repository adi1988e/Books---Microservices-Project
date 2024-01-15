import { Publisher, OrderCreatedEvent, Subjects } from "@books-am/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
