const http = require('http')
const port = 8000
const fs =require('fs')
const server = http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('index.js',function(err,data){
        if(err){

        }else{

        }
        res.end()
    })

}).listen(port,function(err){
    if(err){
        console.log("Something went wrong",err)
    }else{
        console.log("server is listening on port"+ port)

    }
})