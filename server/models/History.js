import mongoose from 'mongoose'


const historySchema = new mongoose.Schema({
    userId: String,
    history: String,
    deposit: String,
    photoUrl: String,
    amount: String,
    uid: String,
    plan: String,
    declined:Boolean
}, {timestamps:true})


export default mongoose.model("History", historySchema)