import nats from "node-nats-streaming";
import { BookCreatedPublisher } from "./events/book-created-publisher";

console.clear();

const stan = nats.connect("books", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", async () => {
  console.log("Publisher connected to NATS");

  const publisher = new BookCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: "123",
      title: "nice book",
      price: 20,
    });
  } catch (error) {
    console.log(error);
  }
});
