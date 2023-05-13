const express=require("express")
const router=express.Router();
const User=require('./useSchema')
const { body, validationResult } = require('express-validator');
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken')
const secret='Mynameisayushmaan'
const { Save } = require("@mui/icons-material");
router.post('/register',[
    body('email').isEmail(),
body("password").isLength({min:5})],async (req,res)=>{
    const validation =validationResult(req);
    

    console.log(req.body.password)
    const secpass=bcrypt.hashSync(req.body.password, 10);
    req.body.password=secpass;
    const newUser=await new User(req.body)
    await newUser.save();
 const id=newUser.id;   
  const authtoken=jwt.sign(id,secret);
    res.send(authtoken);

    

   
})

module.exports=router