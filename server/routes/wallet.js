import express  from "express";
import { addToWallet, deductFromWallet } from "../controllers/wallets.js";

const router = express.Router()



router.put("/incre/balance", addToWallet)

router.put("/decre/balance", deductFromWallet);

export default router

