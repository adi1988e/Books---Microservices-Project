import nats, { Message, Stan } from "node-nats-streaming";
import { randomBytes } from "crypto";
import { BookCreatedListener } from "./events/book-created-listener";

console.clear();

const stan = nats.connect("books", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Listener connected to NATS.");

  stan.on("close", () => {
    console.log("NATS connection closed!");
    process.exit();
  });

  new BookCreatedListener(stan).listen();
});

process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());
