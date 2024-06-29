import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/dbConnection.js";

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
