const mongoose = require("mongoose");

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("MongoDB is already connected...");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    connected = true;
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
