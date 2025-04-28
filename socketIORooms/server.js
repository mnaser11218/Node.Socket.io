const express = require('express')
const app = express();
const port = 3000;
const server = app.listen(port)
let clientNo = 0;

const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: 'http://127.0.0.1:5501', // or '*' for all origins (not recommended in prod)
    methods: ['GET', 'POST'],
  }
});

const connected = (socket)=>{
    clientNo++;
    socket.join(Math.round(clientNo/2))
    socket.emit('serverMsg', Math.round(clientNo/2))

    socket.on('buttonPressed', (clientRoom)=>{
        io.to(clientRoom).emit('switchFromServer')
    })
   
}
io.on('connection', connected)