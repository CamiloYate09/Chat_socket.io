// make connection


// Se utiliza la variable de acuerdo a la necesidad si es local la primera si es en
//produccion la segunda opcion
// var socket = io.connect('http://localhost:4000');
var socket = io.connect('/');

//Query DOM
//
var message = document.getElementById('message');
handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// Emitir events

btn.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});


//

message.addEventListener('keypress', function () {
    socket.emit('typing', handle.value);
});


// Listen for events

socket.on('chat', function (data) {
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '<p>';

});



//*******************

socket.on('typing', function (data) {
    feedback.innerHTML = '<p><em>'+ data+ ' Esta escribiendo el mensaje...</em></p>';

})