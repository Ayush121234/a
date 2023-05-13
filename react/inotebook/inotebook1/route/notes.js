const express=require('express')
const router=express.Router();
const fetchUser=require("../Middleware/fetchuser")
const user=require('../backend/User')
const { body, validationResult } = require('express-validator');


//fetch the notes of the user
router.get("/fetchallnotes",fetchUser,async (req,res)=>{
  //fetchuser is a middleware which autheticates the user 
    const body=await user.find({user:req.user})
    res.json(body)
    
})

//for the creation of new note
router.post("/createnote",fetchUser,[
body('description').isLength({ min: 5 }),
body('title').isLength({min:3})],async (req,res)=>{
const errors = validationResult(req);
const {title,description}=req.body;
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
//connecting the user with the login data and adding title and description
const user1=await new user({title,description,user:req.user}).save();

res.send(await(user1))

})

//update note put takes an real id given after the slash
router.post("/updatenote/:id",fetchUser,async (req,res)=>{
  //destructuring title and description 
    const {title,description}=req.body;
    const newnote={title:"",description:""};
    //whether the title is given or not
    if(title){newnote.title=title}
    //whether the descriptin is given 
    if(description){newnote.description=description}
    //req.params takes the id given in the url and finding the user from the login database
    let note=await user.findById(req.params.id);

    //wether the user is exist
    if(!note){
      return res.status(404).send("Not found")

    }
    //checking that the user with same id or not
    if(note.user.toString()!==req.user){
        return res.status(404).send("Not Allowed")
    }
    //finding the data and updating 
    note=await user.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true})
    res.send();
})
//deleting the note
router.delete("/deletenote/:id",fetchUser,async (req,res)=>{
  
  let note=await user.findById(req.params.id);
 
  if(!note){
    return res.status(404).send("Not found")

  }
  if(note.user.toString()!==req.user){
      return res.status(404).send("Not Allowed")
  }
  note=await user.findByIdAndDelete(req.params.id)
  res.json();
})
module.exports=router;