import express from "express";
import { createUserPin, loginUserPin, resetPin } from "../controllers/pins.js";

const router = express.Router()

router.post("/auth/createpasscode", createUserPin)

router.post('/auth/passcode', loginUserPin)

router.put("/auth/resetpasscode", resetPin)

export default router