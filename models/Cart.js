const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  cartItem: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model("cartItem", CartSchema);
