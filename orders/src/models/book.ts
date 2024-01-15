import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";
import { Order, OrderStatus } from "./order";

interface BookAttrs {
  id: string;
  title: string;
  price: number;
}

export interface BookDoc extends mongoose.Document {
  title: string;
  price: number;
  version: number;
  isReserved(): Promise<boolean>;
}

interface BookModel extends mongoose.Model<BookDoc> {
  build(attrs: BookAttrs): BookDoc;
  findByEvent(event: { id: string; version: number }): Promise<BookDoc | null>;
}

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

bookSchema.set("versionKey", "version");
bookSchema.plugin(updateIfCurrentPlugin);

bookSchema.statics.findByEvent = (event: { id: string; version: number }) => {
  return Book.findOne({
    _id: event.id,
    version: event.version - 1,
  });
};

bookSchema.statics.build = (attrs: BookAttrs) => {
  return new Book({
    _id: attrs.id,
    title: attrs.title,
    price: attrs.price,
  });
};

bookSchema.methods.isReserved = async function () {
  const existingOrder = await Order.findOne({
    book: this,
    status: {
      $in: [
        OrderStatus.Created,
        OrderStatus.AwaitingPayment,
        OrderStatus.Complete,
      ],
    },
  });
  return !!existingOrder;
};

const Book = mongoose.model<BookDoc, BookModel>("Book", bookSchema);

export { Book };
