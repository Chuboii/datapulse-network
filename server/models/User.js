import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const UserSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique:true
    },
    withGoogle:{
    type: Boolean,   
        default:false
    }
}, { timestamps: true })

UserSchema.plugin(passportLocalMongoose)

export default mongoose.model("Users", UserSchema)
