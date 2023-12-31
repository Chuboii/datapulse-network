import User from "../models/User.js"


export const addToWallet = async (req, res, next) => {
    try {
        const { id, amount } = req.body
        
        const addedAmount = await User.findByIdAndUpdate(id, {
            $inc: { balance: amount }
        }, { new: true })
        
        res.status(200).json({
            status:200,
            user:addedAmount
        })

    }
    catch (err) {
        next(err)
        console.log(err)
    }
}

export const deductFromWallet = async (req, res, next) => {
    try {
        const { id, amount } = req.body
        
        const deductBalance = await User.findByIdAndUpdate(id, {
            $inc:{balance: -amount}
        }, { new: true })
        
        res.status(200).json({
            status:200,
            user:deductBalance
        })

    }
    catch (err) {
        console.log(err)
        next(err)
    }
}