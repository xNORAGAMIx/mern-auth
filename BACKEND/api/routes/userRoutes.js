import express from "express";
import { getAllusers } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getAllusers);


export default router;