import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/dbConnection.js";
import userRoute from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use("/api/user", userRoute);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
