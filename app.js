const express = require("express");
const app = express();
const userRoute = require("./routes/user.routes");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);

app.listen("3000", () => {
  console.log("Server is runnig on port 3000");
});
