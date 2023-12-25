import express  from "express";
import { loginUser, registerUser, logoutUser } from "../controllers/users.js";
import { verifyUser } from "../middlewares/verifyUser.js";

const router = express.Router()

router.post("/auth/signup", registerUser)

router.post("/auth/login", loginUser);
  

router.post("/auth/logout", logoutUser)

router.get("/get", verifyUser, (req, res) => {
    console.log("resource")
    res.json(req.user)
})

export default router

