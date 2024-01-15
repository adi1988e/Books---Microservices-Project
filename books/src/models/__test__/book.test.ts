import { Book } from "../book";

it("implements optimistic concurrency control", async () => {
  const book = Book.build({
    title: "New book",
    price: 20,
    userId: "123",
  });
  await book.save();

  // fetch the book twice
  const firstInstance = await Book.findById(book.id);
  const secondInstance = await Book.findById(book.id);

  // make two separate changes to the books we fetched
  firstInstance!.set({ price: 10 });
  secondInstance!.set({ price: 15 });

  // save the first fetched book
  await firstInstance!.save();

  // save the second fetched book and expect an error
  try {
    await secondInstance!.save();
  } catch (err) {
    return;
  }

  throw new Error("Should not reach this point");
});

it("increments the version number on multiple saves", async () => {
  const book = Book.build({
    title: "New book",
    price: 25,
    userId: "123",
  });

  await book.save();
  expect(book.version).toEqual(0);
  await book.save();
  expect(book.version).toEqual(1);
  await book.save();
  expect(book.version).toEqual(2);
});
