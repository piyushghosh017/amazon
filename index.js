
const http =require('http')
const port = 8000
const server = http.createServer(function(req,res){

res.write(
             //  socket.io connection
    const io=require("socket.io")(8000)

    const users={};

    // io isinstance of socket.io
    // it listern to connection
    // and socket.io handle after connection is establish
    io.on("connection", socket =>{
                    // new-user-join event
        socket.on("new-user-joined",name =>{
            console.log("New user",name);
            users[socket.id]=name;
            console.log("new user",name)
            // if new user joined in chat
            socket.broadcast.emit("user-joined",name); // this will pass name 
        });
        socket.on("send",message=>{
            socket.broadcast.emit("receive",{message:message,name:users[socket.id]})
        });
        socket.on("disconnect",message=>{
            socket.broadcast.emit("left",users[socket.id]);
            delete users[socket.id];
        });
    });
    )
   

}).listen(port,function(err){
    if(err){
        console.log("Something went wrong",err)
    }else{
        console.log("server is listening on port"+ port)

    }
})


