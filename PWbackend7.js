const http =require("http")

const server= http.createServer((req,res)=>{
    if(req.url=="/hello"){
        res.end("hello world")
    }else{
        res.end("you are trying to hit a wrong url")
    }
})

server.listen(3000,()=>{
    console.log("server is running")
})