import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../config/dbConnection.js";
import userRoute from "./routes/userRoutes.js";
import authUserRoute from "./routes/authRoutes.js";
import { errorHandler } from "./middlewares/errorHandlers.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["https://mern-auth-frontend-rho.vercel.app"],
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    msg: "Hello from Server",
  });
});

app.use("/api/user", userRoute);
app.use("/api/auth", authUserRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
