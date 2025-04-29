// establish connection with server on port 3000
const socket = io('http://localhost:3000')

const switchButton = document.getElementById("switchButton")
let clientRoom; 
// callback function fires on event 'serverToClient'
socket.on('serverToClient', (data)=>{
    alert(data)
})

// here, the room number sent from server, then we update the client room variable with the proper room number
socket.on('serverMsg', (data)=>{
    console.log("i should be in room: " + data)
    clientRoom = data;
})


// here the server sent an io.to to everyone in the room, so everyone in the room's background will update
socket.on('switchFromServer', ()=>{
    console.log("insidw switch")
     if(document.body.style.background === "darkgray"){
        document.body.style.background = "white"
    }else{
        document.body.style.background ="darkgray"
    }
})

// if button clicked, send the client room to server
switchButton.addEventListener('click', ()=>{
    socket.emit('buttonPressed', clientRoom )
})