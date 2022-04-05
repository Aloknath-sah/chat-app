const http = require('http');
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const port = 4500 || process.env.PORT

const users1 = [{}];

app.use(cors())
app.get("/", (req, res) => {
    res.send("It's working");
})

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", (socket) => {
    console.log("New Connection");

    socket.on("joined", (users) => {
        users1[socket.id] = users.user;
        console.log(users.user)
        socket.broadcast.emit('userJoined', {user:'Admin', message:`${users1[socket.id]} User has joined`})
        socket.emit('welcome', {user:'admin', message:'welcome to the chat'})
    })

    socket.on('message', ({message, id}) => {
        io.emit('sendMessage', {user:users1[id], message})
    })

    socket.on('disconnect1', () => {
        socket.broadcast.emit('leave', {user: 'admin', message:`${users1[socket.id]} has left`})
        console.log('user left')
    })

})

server.listen(port, () => {
    console.log(`server is working on http://localhost:${port}`)
})