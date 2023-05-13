const express=require('express')
const file=require('fs')
const { readFileSync } = require('fs');
const mongoose=require('mongoose')
const app=express();
const path=require('path')
app.use(express.urlencoded())
const bodyparser=require('body-parser')
mongoose.connect('mongodb://127.0.0.1:27017/meraform',{UseNewUrlParser:true});
const schema = new mongoose.Schema({
    name: String,
    class:String,
    age:String,
    roll:String,
    college:String
  });
  const Model = mongoose.model('index', schema);
app.use('/static',express.static("static"))
const f=file.readFileSync('index.html','utf-8')
app.get('/',(req,res)=>{
    res.statusCode=200
    res.setHeader('content-Type','text/html')
  
    res.send(f)
})
app.post('/form',(req,res)=>{
    console.log("hoio")
    const m=new Model(req.body);
    m.save().then(
        res.send("Form submit hogya")
    )
})
app.listen(80,()=>{
    console.log("Running successfully")
})