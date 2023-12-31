import express from 'express'
import { forgottenPin } from '../controllers/forgottenPins.js'

const router = express.Router()

router.post("/forgotpin", forgottenPin)

export default router