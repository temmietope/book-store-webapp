const mongoose = require("mongoose");
const isDevelopment = process.env.NODE_ENV === "development";

const connectDB = async () => {
  try {
    await mongoose.connect(
      isDevelopment ? process.env.MONGO : process.env.MONGO_ATLAS,
      {
        useNewUrlParser: true
      }
    );
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
