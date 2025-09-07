const express = require("express");
const app = express();
const userRoute = require("./routes/user.routes");
const dotenv = require("dotenv");
const connectToDB = require("./config/db");

dotenv.config(); // after configuration we can use MONGO_URI in every where in our application

app.set("view engine", "ejs");

connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);

app.listen("3000", () => {
  console.log("Server is runnig on port 3000");
});
