import express from "express";
import { getAllData, login, logout, signup } from "../controller/auth.controller.js";



const router = express.Router();

router.get("/", getAllData)
router.post("/signup", signup)
router.post("/login",login )
router.post("/logout", logout)

export default router