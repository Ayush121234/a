const express=require("express");
const mongoose=require('mongoose')
const model=require("./useSchema")
const {body}=require('express-validator')
const bcrypt=require("bcrypt")
const jwt_token=require('jsonwebtoken');
const fetchuser = require("./fetchuser");
const secret='Mynameisayushmaan'
const router=express.Router();
router.put('/update',fetchuser,async(req,res)=>{
    if(req.body.name!=undefined){
        const User=await model.findByIdAndUpdate(req.user,{$set:req.body});
        return res.send(User);
    }
    const password=bcrypt.hashSync(req.body.password,10)
    req.body.password=password;
    const User=await model.findByIdAndUpdate(req.user,{$set:req.body});
    console.log(User)
})
module.exports=router;