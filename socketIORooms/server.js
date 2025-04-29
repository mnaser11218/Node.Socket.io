const express = require('express')
const app = express();
const port = 3000;
const server = app.listen(port)
// storing the amount of clients
let clientNo = 0;

const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: 'http://127.0.0.1:5501', // or '*' for all origins (not recommended in prod)
    methods: ['GET', 'POST'],
  }
});

const connected = (socket)=>{
    // increment client number once client is added
    clientNo++;
    // once user joins add him to room (clientno/2 for now) 
    // we want to get room number from endpoint and add user to that room. Once game is over clean out data in room
    socket.join(Math.round(clientNo/2))

    // once client is logged in send the room number to client
    socket.emit('serverMsg', Math.round(clientNo/2))

    // once the button is pressed, we send the client room and io.to will send a message to all the clients in the room 
    socket.on('buttonPressed', (clientRoom)=>{
        io.to(clientRoom).emit('switchFromServer')
    })
   
}
io.on('connection', connected)