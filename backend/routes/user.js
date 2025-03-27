import express from "express";
import { CreateUser } from "../controllers/UserController.js";

const router = express.Router();
router.post("/login", CreateUser);

export default router;
