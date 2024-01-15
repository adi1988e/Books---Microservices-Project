import express, { Request, Response } from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from "@books-am/common";
import { createBookRouter } from "./routes/new";
import { showBookRouter } from "./routes/show";
import { indexBookRouter } from "./routes";
import { updateBookRouter } from "./routes/update";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(currentUser);

app.use(createBookRouter);
app.use(showBookRouter);
app.use(indexBookRouter);
app.use(updateBookRouter);

app.all("*", async (req: Request, res: Response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
