const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'login'
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },
    data:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('user',schema)