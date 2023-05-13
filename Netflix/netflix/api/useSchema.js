const mongoose=require("mongoose");

const user=new mongoose.Schema({
    name:{requried:true,type:String,unique:true},
    password:{required:true,type:String,unique:true},
    email:{required:true,type:String,unique:true}
});

module.exports=new mongoose.model('create',user);