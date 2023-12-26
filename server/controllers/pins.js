import { createError } from "../error/Error.js"
import Pin from "../models/Pin.js"

export const createUserPin = async (req, res, next) => {
    try {
        const { userId, pin, username } = req.body
        
        const isPinCreated = await Pin.find({ userId })
        
        if (isPinCreated.length > 0) return next(createError(403, 'You are not allowed to create a new pin'))

        const hashedPassword = process.env.GENERATED_HASH + pin
        
        console.log(hashedPassword)

        const userPin = new Pin({
            userId,
            username,
            pin: hashedPassword
        })

        await userPin.save()

        res.status(200).json(userPin)
    }
    catch (err) {
    next(err)
    }
}

export const loginUserPin = async (req, res, next) => {
    try {
        const { userId, pin } = req.body
        
        const getPin = await Pin.find({ userId })
        
        const originalNumber = getPin[0].pin * Math.pow(10, 71);
    
        const isPinCorrect = originalNumber === (process.env.GENERATED_HASH + pin)

        console.log(originalNumber)
        console.log((process.env.GENERATED_HASH + pin))

        console.log(isPinCorrect)
        if (isPinCorrect === false) return next(createError(401, 'Pin incorrect'))
        
        res.status(200).json(getPin)

    }
    catch (err) {
        next(err)
    }

}