const express = require('express')
const app = express();
const port = 3000;
const server = app.listen(port)

const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: 'http://127.0.0.1:5501', // or '*' for all origins (not recommended in prod)
    methods: ['GET', 'POST'],
  }
});

const connected = (socket)=>{
    console.log("testing")
    socket.on('clientToServer', (data)=>{
        console.log("hello world")
    })

}
io.on('connection', connected)