const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  type: {
    type: String,
    default: "general"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("book", BookSchema);
