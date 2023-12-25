import { createError } from "../error/Error.js"
import Notification from "../models/Notification.js"

export const postNotification = async (req, res, next) => {
    try {
        const { notify, userId } = req.body

        if (!userId) return next(createError(404, "UserID is required"))

        const postNotify = new Notification({
                userId,
                notify
            })
        
        await postNotify.save()
        
            res.status(200).json(postNotify)
        }
    catch (err) {
        console.log(err)
        next(err)
    }
}

export const getNotification = async (req, res, next) => {
    try {
        const { userId } = req.params

        if (!userId) return next(createError(404, "UserID is required"))
        
            const getNotify = await Notification.find({ userId }).sort({createdAt: -1})
        
            res.status(200).json(getNotify)
    }
    catch (err) {
        console.log(err)
        next(err)
    }
}