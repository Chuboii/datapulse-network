import express  from "express";
import { addToWallet, deductFromWallet, getWalletBalance } from "../controllers/wallets.js";

const router = express.Router()


router.get("/wallet/:id", getWalletBalance)

router.put("/incre/balance", addToWallet)

router.put("/decre/balance", deductFromWallet);

export default router

