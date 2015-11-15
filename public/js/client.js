'use strict';

let socket = io();

function print(line) {
	let el = document.getElementById('debug');
	let li = document.createElement('li');
	li.innerHTML = line;
	el.appendChild(li);
}

['rock', 'paper', 'scissors'].forEach((id) => {
	let el = document.getElementById(id);
	el.addEventListener('click', (e) => socket.emit('turn', id));
});

socket.emit('message', 'Hello Server');

socket.on('message', (msg) => print(msg));
socket.on('turn', (turn) => print(turn));