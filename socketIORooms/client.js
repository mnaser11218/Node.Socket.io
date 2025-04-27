// establish connection with server on port 3000
const socket = io('http://localhost:3000')

const switchButton = document.getElementById("switchButton")

// callback function fires on event 'serverToClient'
socket.on('serverToClient', (data)=>{
    alert(data)
})

// client sends message to server that it recieved message
socket.emit('clientToServer', 'Hello Server')


// if button clicked change background color

switchButton.addEventListener('click', ()=>{
    console.log("button clicked")
    if(document.body.style.background === "darkgray"){
        document.body.style.background = "white"
    }else{
        document.body.style.background ="darkgray"
    }
})