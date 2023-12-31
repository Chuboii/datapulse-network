import {
  createError
} from "../error/Error.js"
import Pin from "../models/Pin.js"

export const createUserPin = async (req, res, next) => {
  try {
    const {
      userId,
      pin,
      username
    } = req.body

    const isPinCreated = await Pin.find({
      userId
    })

    if (isPinCreated.length > 0) return next(createError(403, 'You are not allowed to create a new pin'))

    const hashedPassword = process.env.GENERATED_HASH + pin

    const userPin = new Pin({
      userId,
      username,
      pin: hashedPassword
    })

    await userPin.save()

    res.status(200).json("Successfully created")
  }
  catch (err) {
    next(err)
  }
}

export const loginUserPin = async (req, res, next) => {
  try {
    const {
      userId,
      pin
    } = req.body

    const getPin = await Pin.find({
      userId
    })

    if (getPin.length === 0) return next(createError(403, 'You have not created a pin'))

    const isPinCorrect = getPin[0].pin[0] === (process.env.GENERATED_HASH + pin)

    if (isPinCorrect === false) return next(createError(401, 'Pin incorrect'))

    res.status(200).json("Successfully unlocked")

  }
  catch (err) {
    next(err)
  }

}

export const resetPin = async (req, res, next) => {
  try {
    const { userId, pin } = req.body
    
    const hashedPassword = process.env.GENERATED_HASH + pin

    await Pin.findOneAndUpdate({ userId }, { $set: { pin: hashedPassword } })
    
    res.status(200).json("You've successfully changed your pin")
  }
  catch (err) {
    next(err)
  }
}