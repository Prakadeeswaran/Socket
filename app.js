var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
	console.log("Client Connected.");
	
	client.on('join', function(name) {
		client.nickName = name;
	console.log(name+'Joined Chat');
	});
	client.on('messages', function(data) {
		io.emit('messages', data);		
		console.log(data);	
	});
	
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});


server.listen(8080);
