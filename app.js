const express = require("express");
const app = express();
const userRoute = require("./routes/user.routes");
const dotenv = require("dotenv");
const connectToDB = require("./config/db");
const cookieParser = require("cookie-parser");

dotenv.config(); // after configuration we can use MONGO_URI in every where in our application

app.set("view engine", "ejs");

connectToDB();

app.use(express.json());
app.use(cookieParser());// third party middleware is u does not call then server can't able to send response 
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);

app.listen("3000", () => {
  console.log("Server is runnig on port 3000");
});
