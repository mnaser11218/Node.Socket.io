// establish connection with server on port 3000
const socket = io('http://localhost:3000')

const switchButton = document.getElementById("switchButton")
let clientRoom; 
// callback function fires on event 'serverToClient'
socket.on('serverToClient', (data)=>{
    alert(data)
})

socket.on('serverMsg', (data)=>{
    console.log("i should be in room: " + data)
    clientRoom = data;
})

// client sends message to server that it recieved message

socket.on('switchFromServer', ()=>{
    console.log("insidw switch")
     if(document.body.style.background === "darkgray"){
        document.body.style.background = "white"
    }else{
        document.body.style.background ="darkgray"
    }
})

// if button clicked change background color

switchButton.addEventListener('click', ()=>{
    socket.emit('buttonPressed', clientRoom )
})