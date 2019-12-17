const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String
  },
  author: {
    type: String
  },
  description: {
    type: String
  },
  genre: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("cart", CartSchema);
