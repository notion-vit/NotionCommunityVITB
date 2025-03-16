import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
export default async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
