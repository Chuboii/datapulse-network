import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import passport from 'passport'
import session from 'express-session'
import LocalStrategy from 'passport-local'
import MongoStore from 'connect-mongo'
import User from './models/User.js'
import userRouter from './routes/user.js'
import cookieParser from 'cookie-parser'
import walletRouter from './routes/wallet.js'
import notifyRouter from './routes/notification.js'
import historyRouter from './routes/history.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
const sessionConfig = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO,
      }),
      cookie: {
        httpOnly:true,
        maxAge: 1000 * 60 * 60 * 24
      }
}
app.use(session(sessionConfig))
app.use(passport.initialize())
app.use(passport.session())


passport.use(new LocalStrategy(User.authenticate()));
  
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO)
        console.log("Connected to database")
    }
    catch (e) {
        console.log(e, 'Mongoose not connected due to an error')
    }
}


app.use("/api", userRouter)
app.use("/api", walletRouter)
app.use("/api", notifyRouter)
app.use("/api", historyRouter)

app.use((err,req, res, next) => {
    const status = err.status || 500
    const message = err.message || 'Internal server error - Check server to fix'

    return res.status(status).json({
        status,
        message
    })
})

app.use("*", (req,res) => {
    res.send("The route you entered is not valid. Please try again")
})


app.listen("8080", () => {
    connect()
    console.log("server listening on port 8080")
})