import express  from "express";
import { verifyUser } from "../middlewares/verifyUser.js";
import { getAllHistory, getLimitedHistory, postTransactionHistory } from "../controllers/history.js";

const router = express.Router()

router.post("/add/history", postTransactionHistory)

router.get("/get/limited/history/:userId", getLimitedHistory);

router.get("/get/all/history/:userId", getAllHistory);

export default router



