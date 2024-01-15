import request from "supertest";
import { app } from "../../app";

const createBook = () => {
  return request(app).post("/api/books").set("Cookie", global.signin()).send({
    title: "asldkf",
    price: 20,
  });
};

it("can fetch a list of books", async () => {
  await createBook();
  await createBook();
  await createBook();

  const response = await request(app).get("/api/books").send().expect(200);

  expect(response.body.length).toEqual(3);
});
