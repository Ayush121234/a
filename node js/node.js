const http=require('http')
const fs=require('fs')
const sum=require('./sum.js')
console.log(sum(6,7))
const file=fs.readFileSync('hello.html','utf-8')
const server=http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('content-type','text/html')
    if(req.url=="/")
    {
    res.end(file)
    }
    else if(req.url=="/about"){
        console.log("hello")
    }
})
server.listen(80,'127.0.0.1',()=>{
    console.log("hii")
})