const http = require('http');
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const port = 4500 || process.env.PORT

app.use(cors())
app.get("/", (req, res) => {
    res.send("It's working");
})

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", () => {
    console.log("New Connection");
})

server.listen(port, () => {
    console.log(`server is working on http://localhost:${port}`)
})