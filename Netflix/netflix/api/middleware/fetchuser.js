const express=require("express")
const router=express.Router();
const User=require('./useSchema')

const { body, validationResult } = require('express-validator');
const bcrypt=require("bcrypt");
router.post("/login",async (req,res)=>{

})