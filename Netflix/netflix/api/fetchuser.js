const jwt_token=require('jsonwebtoken')
const secret='Mynameisayushmaan'
const fetchuser=(req,res,next)=>{
    const authtoken=req.header("auth-token");
    const id=jwt_token.verify(authtoken,secret);
   req.user=id;
   console.log(req.user)
   next();
}
module.exports=fetchuser;