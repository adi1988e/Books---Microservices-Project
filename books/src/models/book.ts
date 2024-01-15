import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface BookAttrs {
  title: string;
  price: number;
  userId: string;
}

interface BookDoc extends mongoose.Document {
  title: string;
  price: number;
  userId: string;
  version: number;
  orderId?: string;
}

interface BookModel extends mongoose.Model<BookDoc> {
  build(attrs: BookAttrs): BookDoc;
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
    },
    userId: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
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

bookSchema.statics.build = (attrs: BookAttrs) => {
  return new Book(attrs);
};

const Book = mongoose.model<BookDoc, BookModel>("Book", bookSchema);

export { Book };
