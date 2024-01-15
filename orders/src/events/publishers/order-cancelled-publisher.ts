import { Publisher, OrderCancelledEvent, Subjects } from "@books-am/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
