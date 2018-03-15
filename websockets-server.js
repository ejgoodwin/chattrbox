// Import WebSockets module
var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
// Server is established and bound to port
var ws = new WebSocketServer({
	port: port
});
console.log('websockets server started');
// Array to store messages
var messages = [];

// Callback for any connection events for WebSockets Server
// When client makes connection to server, that connection is accessable through'socket' object - function's argument
ws.on('connection', function(socket) {
	console.log('client connection established');

	// Allow new users to see previous messages
	messages.forEach(function(msg) {
		socket.send(msg);
	});

	// Repeat messages sent to server - called an 'echo server'
	socket.on('message', function(data) {
		console.log('message received: ' + data);
		// Add messages to array
		messages.push(data);
		ws.clients.forEach(function(clientSocket) {
			clientSocket.send(data);
		});
	});
});