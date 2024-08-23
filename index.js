require("dotenv").config();
const fileUpload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const router = require("./components/routes");
const cron = require("node-cron");
const { updateExpiredQuizzes } = require("./components/repositories/auth");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: process.env.NODE_ENV == "development" ? "./tmp" : "/tmp",
  })
);

cron.schedule("*/1 * * * *", async () => {
  // await updateExpiredQuizzes();
  console.log("Checked for expired quizzes and updated isDone status");
});

app.use("/api", router);

app.use("*", (req, res) => {
  res.status(404).json({
    data: null,
    message: "Route not found!",
  });
});

app.use((err, req, res, next) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err.statusCode) {
    statusCode = err.statusCode;
  }
  if (err.message) {
    message = err.message;
  }

  res.status(statusCode).json({
    data: null,
    message,
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
