import express  from "express";
import { verifyUser } from "../middlewares/verifyUser.js";
import { getNotification, postNotification } from "../controllers/notifications.js";

const router = express.Router()

router.post("/add/notification", verifyUser, postNotification)

router.get("/get/notification/:userId", verifyUser, getNotification);

export default router

