const socketio = io();

socketio.on('message', (msg) =>{
    let p = document.createElement('p')
    let icon = document.createElement('i')
    icon.classList.add('fas')
    icon.classList.add('fa-caret-right')
    p.appendChild(icon)
    let txt = document.createTextNode(msg)
    p.appendChild(txt)
    document.getElementById('messages').appendChild(p)
});

document.getElementById('send').addEventListener("click", () => {
    socketio.send(document.getElementById('myMessage').value);
    document.getElementById('myMessage').value = "";
});
