const http = require('http')
const websocket = require('ws')

const server = http.createServer((req,res)=>{
    res.end('I am connected!')
})
const wss = new websocket.WebSocketServer({server})

wss.on('headers', (headers, req)=>{
    console.log(headers)
})

wss.on('connection', (ws, req)=>{
    ws.send('Welcome to the websocket server!!')
})


server.listen(8080)