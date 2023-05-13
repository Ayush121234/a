
let ex=require("express");
let date1=require(__dirname+'/date.js')
const bodyParser = require("body-parser");
let app=ex();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",function(req,res){
    console.log(date1())
})
let date=new Date();
let day=date.getDay();
app.post("/",function(req,res){
    var a=req.body.name;
    console.log(a)
})
app.listen(3000,function(){
    console.log("Printed")
})