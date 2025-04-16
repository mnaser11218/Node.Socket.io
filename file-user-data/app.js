// const fs = require('fs')
// const userName = 'Mohammed';

// fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log("wrote file")
// })
const http = require('http')
const server = http.createServer((req, res) => {
    console.log("Incoming request")
    console.log(req.method, req.url)
    res.setHeader('Content-Type', 'text/html')
    res.end('<form method="POST"><input type="text" name="username"><button>Create User</button></input></form>')
})

server.listen(5000)