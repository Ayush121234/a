const express=require('express');
const app=express();
const cors=require('cors')
app.use(cors())
const mongoose=require('mongoose');
const mon=async ()=>{ await mongoose.connect('mongodb://127.0.0.1:27017/Netflix').then(()=>{
    console.log("Hello")
})}
mon();
app.use(express.json())
app.use('/api/auth',require('./continuewatch.js'))
app.use('/api/auth',require("./addwatching.js"))
app.use("/api/auth",require("./update.js"))

app.use("/api/auth",require("./auth.js"))
app.use('/app/auth',require('./login.js'))
app.get("/",async (req,res)=>{
    console.log("Done")
    res.send("Hlo hwo  r u")
})
app.listen('8000',console.log("Server started"));