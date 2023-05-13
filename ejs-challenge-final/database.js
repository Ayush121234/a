const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/fruits",{useNewUrlParser:true});
const schema=new mongoose.Schema({
    name:String,
    age:String
});
const fruit=mongoose.model("Fruit",schema);
const db=new fruit({
    name:"AYUSH",
    age:"18"
});
db.save();