import { createError } from "../error/Error.js"

export const verifyUser = (req, res, next) => {
    if (!req.isAuthenticated()) return next(createError(403, "You must be logged in"))
    
    next()
}