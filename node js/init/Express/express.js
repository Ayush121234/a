const express=require('express')
const path=require("path")
const mongoose=require('mongoose');
const { readFileSync } = require('fs');
const app=express();
const file=require('fs')
const f=file.readFileSync('./static/index.html','utf-8')

app.use('/static',express.static("static"))
mongoose.connect('mongodb://127.0.0.1:27017/myform',{UseNewUrlParser:true});
const schema = new mongoose.Schema({
    name: String,
    class:String,
    age:String
  });
const bodyparser=require('body-parser')
const Model = mongoose.model('index', schema);
app.set('view engine','pug')
app.set("views",path.join(__dirname,'views'))
app.use(express.urlencoded())

app.get("/pug",(req,res)=>{

    res.status(200).render('in',{title:'hello',message:"than pug"})
})

app.get("/form",(req,res)=>{

    res.statusCode=200
    res.setHeader('content-type','text/html')
    res.send(f)
})

app.post("/form",(req,res)=>{
    const m=new Model(req.body)
    m.save().then(
        res.send('hello')
    )
})
var database;
app.get("/",(req,res)=>{
    database.collection('tests').find({}).toArray((err,results)=>{
        res.send(results)
    })
})
app.post("/",(req,res)=>{
    console.log(req.body)
    const params={'title':'hogy','content':"nhi hua"}
    res.status(200).render('in',params)
})
app.listen(80,()=>{
    console.log("port started successfully")
})