const express=require('express')
const router=express.Router();
const model=require('../backend/Login')
//express validator is used to check the credentials
const { body, validationResult } = require('express-validator');
//module for making the password encrypted
const bcrypt = require('bcrypt');

//the jwt will asign token on the base of this
const jwt_secret="Mynameisayush1 "
var jwt = require('jsonwebtoken');
const fetchUser=require("../Middleware/fetchuser")

//creatiung new user
router.post('/creatuser',[
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
    body('name').isLength({min:3})],async (req,res)=>{
      
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //checking is already user exist with that email
    const u=await model.findOne({email:req.body.email})
    if(u){
      return console.log("hii")
    }
    else{
      // creating a new user
      const salt = bcrypt.genSaltSync(10);
      const secpass=bcrypt.hashSync(req.body.password,salt)
      req.body.password=secpass;
    const user=model(req.body)
    //saving into database
    user.save()
    //taking id of new created user
    const User={
      id:user.id
    }

    //assigning jwt token to that credentials
    var token = jwt.sign(user.id,jwt_secret);
    //printing the token for checking
    res.send(token)
    }
    
  })

//login for user
  router.post('/login',[
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 })
   ],async (req,res)=>{
      try{
    const errors = validationResult(req);

        //checking error in credentials
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //finding the credentials into the database
    const u1=await model.findOne({email:req.body.email})
    if(!u1){
      //displaying error if not found
      return console.log("Enter valid credentials")
    }
    //compare the entered password by the bcrpt password
    const use2=await bcrypt.compare(req.body.password,u1.password)
    if(!use2){
      //checking the password
      return console.log("Enter Valid credentials")
    }
    // res.send(u1.id)
    //taking authtoken form the user id
    const authtoken=jwt.sign(u1.id,jwt_secret);
    res.json({authtoken});
  }catch(error){
      res.status(500).send("Invaliud request")
  }
})
    
//to get the details of the user

router.post("/getuser",fetchUser,async (req,res)=>{
 //req.user gives the id 
  const id1=req.user;
  //select the user in the database except password
  const u1=await model.findById(id1).select("-password");
  // res.send(u1);
  res.json(u1)
  
})

module.exports=router;