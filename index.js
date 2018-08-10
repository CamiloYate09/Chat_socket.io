var express = require('express');
var socket = require('socket.io');

//App setup

var app = express();

var server = app.listen(4000, function () {

    console.log('Listening to request on the port 4000')
    
    
    // haciendo preubas con Sergio 
    

});

//*************************************



//*******************************


// static public

app.use(express.static('public'));


// socket setup

var io = socket(server);

io.on('connection', function (socket) {

    console.log('made socket connection', socket.id);

    socket.on('chat', function (data) {

        io.sockets.emit('chat', data);

    });


//************************

    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data)


    });

});


