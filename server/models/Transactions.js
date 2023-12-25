import mongoose from 'mongoose'


const transactionSchema = new mongoose.Schema({
    userId: String,
    transactions:String
}, {timestamps:true})


export default mongoose.model("Transactions", transactionSchema)