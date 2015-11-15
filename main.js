'use strict';

let http = require('http');
let express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

let server = http.createServer(app);

server.listen(3000, () => console.log('Server is ready'));