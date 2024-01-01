import History from "../models/History.js"

export const postTransactionHistory = async (req, res, next) => {
  try {
    const {
      userId,
      photoUrl,
      amount,
      history,
      deposit
    } = req.body

    const createHistory = new History({
      userId,
      photoUrl,
      amount,
      history,
      deposit
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

    console.log(limit)
    const a = +limit + 4
    console.log(a)
    const getLimited = await History.find({
      userId
    }).limit(a)

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