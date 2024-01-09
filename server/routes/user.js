import express  from "express";
import {
    loginUser, registerUser, logoutUser, getCurrentUser} from "../controllers/users.js";
import { get } from "mongoose";
// import { verifyUser } from "../middlewares/verifyUser.js";

const router = express.Router()

router.post("/auth/signup", registerUser)

router.post("/auth/login", loginUser);
  
router.post("/auth/user", getCurrentUser)
router.post("/auth/logout", logoutUser)

// router.get("/get", verifyUser, (req, res) => {
//     res.json(req.user)
// })

export default router

