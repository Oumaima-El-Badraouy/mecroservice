const mongoose = require('mongoose');
const dbURI = process.env.DB_URI; 
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected!");
  } catch (err) {
    console.error("Database connection error:", err);
  }
};
module.exports = connectDB;
