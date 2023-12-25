import mongoose from 'mongoose'


const notificationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required:true
    },
    notify: String
}, {timestamps:true})


export default mongoose.model("Notifications", notificationSchema)