require("dotenv").config();
const fileUpload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const router = require("./components/routes");
const cron = require("node-cron");
const { updateExpiredQuizzes } = require("./components/repositories/auth");
const { calculateTotalPoint } = require("./components/services/totalPoint");
const { User } = require("./models");
const { Op } = require("sequelize");

const app = express();
const port = process.env.PORT || 8080;

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

// cron.schedule("* * * * *", async () => {
//   console.log("Cron job triggered");
//   try {
//     const now = new Date();
//     const usersToUpdate = await User.findAll({
//       where: { isDone: false, timeToEnd: { [Op.lte]: now } },
//     });

//     if (usersToUpdate.length > 0) {
//       // Update isDone status
//       await User.update(
//         { isDone: true },
//         { where: { isDone: false, timeToEnd: { [Op.lte]: now } } }
//       );
//       console.log(`Updated isDone status for ${usersToUpdate.length} users`);

//       // Calculate total point for each user
//       for (const user of usersToUpdate) {
//         const totalPoints = await calculateTotalPoint({
//           userId: user.id,
//           startTime: user.startTime,
//         });
//         console.log(
//           `Calculated total points for user ${user.id}: ${totalPoints}`
//         );
//       }
//     } else {
//       console.log("No expired quizzes found");
//     }
//   } catch (error) {
//     console.error("Error in cron job:", error);
//   }
// });

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
