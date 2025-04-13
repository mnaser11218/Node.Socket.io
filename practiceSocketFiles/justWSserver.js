// server backend

const http = require('http')
const websocket = require('ws')

// creating http server 
const server = http.createServer((req,res)=>{
    res.end('I am connected!')
})

// creating websocket server and listening to http server
const wss = new websocket.WebSocketServer({server})



// once we connect, server will send message to browser and listen for message sent back. 
wss.on('connection', (ws, req)=>{
    ws.send('Welcome to the websocket server!!')
    ws.on('message', data=>{
        console.log(data.toString())
    })
})


server.listen(8080)