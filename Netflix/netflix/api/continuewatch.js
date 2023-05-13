const express=require('express');
const router=express.Router();
const model=require('./userschema');
const fetchuser=require('./fetchuser')
router.get('/continuewatch',fetchuser,async (req,res)=>{
    
    const use=await model.find({user:req.user}).sort({_id:-1});;
    res.json(use);
})
module.exports=router;