const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [3, "Username must be at least 3 characters long"],
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlenght: [12, "Email must be at least 12 characters long"],
  },

  password: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [5, "Password msut be at least 5 characters long"],
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
