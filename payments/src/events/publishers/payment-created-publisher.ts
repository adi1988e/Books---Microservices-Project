import { Subjects, Publisher, PaymentCreatedEvent } from '@books-am/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
