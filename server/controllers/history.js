import History from "../models/History.js"

export const postTransactionHistory = async (req, res, next) => {
    try {
        const { userId, photoUrl, amount, history } = req.body
        
        const createHistory = new History({
            userId,
            photoUrl,
            amount,
            history
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
        const { userId } = req.params
        
        const getLimited = await History.find({ userId }).limit(5)
        
        res.status(200).json(getLimited)
    }
    catch (err) {
        console.log(err)
        next(err)
    }
}


export const getAllHistory = async (req, res, next) => {
    try {
        const { userId } = req.params
        
        const getHistory = await History.find({ userId })
        
        res.status(200).json(getHistory)
    }
    catch (err) {
        console.log(err)
        next(err)
    }
}