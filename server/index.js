import { config as configDotenv } from "dotenv";
import express from "express";
import path from "path";
import loggerMiddleware from "./middleware/logger";

const app = express();
const dotenv = configDotenv();

app.use(loggerMiddleware);

app.use(express.static(path.join(__dirname, "../app/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../app/build/index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log(`Server on ${3000} Port`);
});
