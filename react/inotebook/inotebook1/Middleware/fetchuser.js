var jwt = require('jsonwebtoken');
const jwt_secret="Mynameisayush1 ";
const fetchuser=(req,res,next)=>{
    const token=req.header("auth-token");
  
    if(!token){
        res.status(404).send("Not valid token")
    }
    try{
        const data=jwt.verify(token,jwt_secret);
        
        req.user=data;
       
       
        next();

    }catch(error){
        res.status(401).send("Not find the auth token")
    }
    
}
module.exports=fetchuser;