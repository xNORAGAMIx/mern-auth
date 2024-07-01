import express from "express";
import { getAllusers, updateUser } from "../controllers/userControllers.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", getAllusers);
router.post("/update/:id", verifyToken, updateUser);


export default router;