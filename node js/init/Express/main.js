const express=require('express')
const file=require('fs')
const { readFileSync } = require('fs');
// const mongoose=require('mongoose')
const app=express();
const path=require('path')
app.use('/static',express.static("static"))
const f=file.readFileSync('./static/form1.html','utf-8')
app.get('/',(req,res)=>{
    res.statusCode=200
    res.setHeader('content-type','text/html')
    res.send(f)
})
app.listen(80,()=>{
    console.log("Running successfully")
})