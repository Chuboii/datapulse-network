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
    },
    balance: {
        type: Number,
        default:0
    },
    photoUrl: {
        type:String
    }
}, { timestamps: true })

UserSchema.plugin(passportLocalMongoose)

export default mongoose.model("Users", UserSchema)
