import express  from "express";
import { loginUser, registerUser, logoutUser, getUser } from "../controllers/users.js";
import { verifyUser } from "../middlewares/verifyUser.js";

const router = express.Router()

router.post("/auth/signup", registerUser)

router.post("/auth/login", loginUser);
  

router.post("/auth/logout", logoutUser)

router.get("/auth/user", getUser)

router.get("/get", verifyUser, (req, res) => {
    res.json(req.user)
})

export default router

