const mongoose=require('mongoose')
const model=require("./useSchema")
const express=require('express');
const {body}=require('express-validator')
const bcrypt=require("bcrypt")
const jwt_token=require('jsonwebtoken')
const secret='Mynameisayushmaan'

const { validationResult } = require('express-validator');
const { ConstructionOutlined } = require('@mui/icons-material');
const router =express.Router();
router.post('/login',[
    body('password').isLength({min:5}),
    body('email').isEmail()
],async (req,res)=>{
    const validation=validationResult(req);
  
    const user=await model.findOne({email:req.body.email});
    console.log(user)
    console.log(req.body.password)
    if(!user){
        return res.status(200).send("Not valid Email")
    }
    console.log(user.email)
    const use2=await bcrypt.compare(req.body.password,user.password)
    
    if(!use2){
        return res.send("noooooo")
    }
    const jwt=jwt_token.sign(user.id,secret)
    res.json({jwt})
    
})
module.exports=router;