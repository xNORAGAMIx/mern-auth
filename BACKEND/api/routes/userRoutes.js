import express from "express";
import { deleteUser, getAllusers, updateUser } from "../controllers/userControllers.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", getAllusers);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);



export default router;