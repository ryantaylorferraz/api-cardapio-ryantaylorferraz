import express, { json } from "express";
import helmet from "helmet"
import { MenuRouter } from "./routes/MenuRouter";
import { handleError } from "./errors/handleError";

export const app = express();

app.use(helmet())

app.use(json())

app.use("/menu", MenuRouter)

app.use(handleError.execute)
