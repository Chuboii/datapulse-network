import mongoose from "mongoose";
// import passportLocalMongoose from 'passport-local-mongoose'
const PinSchema = new mongoose.Schema({
    userId: String,
    username: String,
    pin:Number
}, { timestamps: true })


// PinSchema.plugin(passportLocalMongoose)

export default mongoose.model("Pin", PinSchema)