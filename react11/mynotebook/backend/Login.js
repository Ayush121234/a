
const mongoose=require('mongoose')
var UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        default:Date.now
    }
})

module.exports=mongoose.model('login',UserSchema)