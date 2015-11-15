'use strict';

let http = require('http');
let express = require('express');
let RpsGame = require('./RpsGame');

let app = express();

app.use(express.static(__dirname + '/public'));
let server = http.createServer(app);

let io = require('socket.io')(server);

let waitingPlayer = null;

io.on('connection', (socket) => {
	if (waitingPlayer) {
		new RpsGame([socket, waitingPlayer]);
		waitingPlayer = null;
	} else {
		socket.emit('message', 'Wait for the other player');
		waitingPlayer = socket;
	}

	socket.on('message', (msg) => io.emit('message', msg));

});

server.listen(3000, () => console.log('Server is ready'));