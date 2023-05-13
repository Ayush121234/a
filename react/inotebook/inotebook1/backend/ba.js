const mongoose=require('mongoose')

const connetToMongo=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/login',()=>{
    
        console.log('hii')
    })
}
mongoose.set('strictQuery', true);
module.exports=connetToMongo;