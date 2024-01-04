import History from "../models/History.js"
import {v4 as uuid} from 'uuid'
export const postTransactionHistory = async (req, res, next) => {
  try {
    const {
      userId,
      photoUrl,
      amount,
      history,
      deposit,
      plan,
      declined
    } = req.body

    const createHistory = new History({
      userId,
      photoUrl,
      amount,
      history,
      deposit,
      uid: uuid(),
      plan,
      declined
    })

    await createHistory.save()

    res.status(200).json(createHistory)

  }
  catch (err) {
    console.log(err)
    next(err)
  }
}

export const getLimitedHistory = async (req, res, next) => {
  try {
    const {userId,  limit = 0  } = req.params

    
    const limitAmount = +limit + 4
    const getLimited = await History.find({
      userId
    })
      .sort({ createdAt: -1 })
      .limit(limitAmount)

    res.status(200).json(getLimited)
  }
  catch (err) {
    console.log(err)
    next(err)
  }
}


export const getAllHistory = async (req, res, next) => {
  try {
    const {
      userId
    } = req.params

    const getHistory = await History.find({
      userId
    }).sort({
      createdAt: -1
    })

    res.status(200).json(getHistory)
  }
  catch (err) {
    console.log(err)
    next(err)
  }
}