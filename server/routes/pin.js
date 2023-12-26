import express from "express";
import { createUserPin, loginUserPin } from "../controllers/pins.js";

const router = express.Router()

router.post("/auth/createpasscode", createUserPin)

router.post('/auth/passcode', loginUserPin)


export default router