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

export const getWalletBalance = async (req, res, next) => {
    try {
        console.log(req.params)
        const { id } = req.params
        
        const user = await User.findById(id)

        console.log(user)
        res.status(200).json({
            success: 200,
            user
        })
    }
    catch (err) {
        next(err)
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