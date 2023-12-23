import { createError } from "../error/Error.js"
import User from "../models/User.js"
import passport from "passport"

export const registerUser = async (req, res, next) => {
    try {
        const { email, username, password } = req.body
        
        const newUser = new User({
            email,
            username
        })

        await User.register(newUser, password)

        await newUser.save()

        res.status(200).json({
            status: 200,
            message: "user created successfully",
            data: newUser
        })
    }
    catch (err) {
        console.log(err.message)
        if (err.message === "A user with the given username is already registered") {
            next(createError(401, "Ooops! username has already been taken"));
        }
        else if (err.message === `E11000 duplicate key error collection: sme-datashare.users index: email_1 dup key: { email: "${req.body.email}" }`) {
            next(createError(401, "Ooops! Email has already been taken"))
        }
        else if (err.message === "No username was given") {
            next(createError(400, "Ooops! You must provide a username"))
        }
        else if (err.message === "Users validation failed: email: Path `email` is required.") {
            next(createError(400, "Ooops! You must provide an email address"))
        }
        else if (err.message === "No password was given") {
            next(createError(400, "Ooops! You must provide a password"))
        }
    }
}

export const loginUser = (req, res, next) => {
        passport.authenticate("local", (err, user, info) => {
          if (err) return next(err)
      
          if (!user) return next(createError(401, info))
      
          req.logIn(user, (err) => {
            if (err) return next(err)

            return res.status(200).json({ success: true, user });
          })
            
        })(req, res, next);
}

// export const googleLogin = () => {

// }

export const logoutUser = (req, res, next) => {
    try {
        req.logout(() => {
            res.status(200).json("Logged out successfully")
        });
    }
    catch (e) {
        next(e)
    }
}