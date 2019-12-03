const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
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
