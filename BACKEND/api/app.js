import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/dbConnection.js";
import userRoute from "./routes/userRoutes.js";
import authUserRoute from "./routes/authRoutes.js";
import { errorHandler } from "./middlewares/errorHandlers.js";

dotenv.config();

connectDB();


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/auth", authUserRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
