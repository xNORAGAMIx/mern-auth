import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/dbConnection.js";
import userRoute from "./routes/userRoutes.js";
import authUserRoute from "./routes/authRoutes.js";

dotenv.config();

connectDB();


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/auth", authUserRoute);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
