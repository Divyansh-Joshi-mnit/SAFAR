import app from "./app.js";
import { db } from "./config/database.js";
import Razorpay from "razorpay"
import {config} from "dotenv"
const PORT = process.env.PORT || 8080;
config({
  path:"./config/.env"
})
export const instance = new Razorpay({
  key_id:process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET
})

db.getConnection()
  .then(() => {
    console.log("Database connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed!", err);
  });
