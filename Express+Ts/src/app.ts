import express from "express";
import cors from "cors";

import { pinoHttpMiddleware } from "./utils/logger.helper.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(pinoHttpMiddleware);

export default app;
