import mongoose from 'mongoose'


const historySchema = new mongoose.Schema({
    userId: String,
    history: String,
    photoUrl: String,
    amount:String
}, {timestamps:true})


export default mongoose.model("History", historySchema)