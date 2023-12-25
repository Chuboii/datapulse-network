import express  from "express";
import { verifyUser } from "../middlewares/verifyUser.js";
import { addToWallet, deductFromWallet } from "../controllers/wallets.js";

const router = express.Router()

router.put("/incre/balance", verifyUser, addToWallet)

router.put("/decre/balance", verifyUser, deductFromWallet);

export default router

