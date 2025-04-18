const express = require('express')
const app = express();

// const fs = require('fs')
// const userName = 'Mohammed';

// fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log("wrote file")
// })
// const http = require('http')
// const server = http.createServer((req, res) => {

//     //request if http req is a post request, get data from request body and send it as a response 
//     if(req.method === "POST"){
//         let body = ""
//         req.on('end', ()=>{
//          res.end(`<h1>The name is ${body.split("=")[1]}</h1>`)
//         })
//         req.on('data', (data)=>{
//             body += data
//         })

//     }else{
//         // if http request is not get request, send a form as a response
//         res.setHeader('Content-Type', 'text/html')
//         res.end('<form method="POST"><input type="text" name="username"><button>Create User</button></input></form>')
//     }

// })


// listen to http request made to localhost:5000
// server.listen(5000)


// express


app.use((req, res, next) => {
    let body = ''

    req.on('end', () => {
        const userName = body.split('=')[1]
        if (userName) {
            req.body = { name: userName }
        }
        next()
    })

    req.on('data', chunk => {
        body += chunk;
    })
})

// middleware function take a callback with three arguments
app.use((req, res, next) => {
    if (req.body) {
        return res.send('<h1>' + req.body.name + '</h1>')
    }
    res.send('<form method="POST"><input type="text" name="username"><button>Create User</button></input></form>')

})

app.listen(5000);