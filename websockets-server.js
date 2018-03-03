// Import WebSockets module
var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var Prompt = require('prompt-password');
var prompt = new Prompt({
	type: 'password',
	message: 'Enter your password',
	name: 'password'
});
// Server is established and bound to port
var ws = new WebSocketServer({
	port: port
});
console.log('websockets server started');
// Array to store messages
var messages = [];

// prompt.run()
//   .then(function(answers) {
//     console.log(answers)
//   });

// Callback for any connection events for WebSockets Server
// When client makes connection to server, that connection is accessable through 'socket' object - function's argument
ws.on('connection', function(socket) {
	console.log('client connection established');
	// Prompt new users for a password. If user enters correct password, show them previous messages
	prompt.run()
	  .then(function(answers) {
	    console.log(answers)
	    if(answers == 'swordfish') {
	    	// Allow new users to see previous messages
	    	messages.forEach(function(msg) {
	    		socket.send(msg);
	    	});
	    }
	  });
	

	// Repeat messages sent to server - called an 'echo server'
	socket.on('message', function(data) {
		console.log('message received: ' + data);
		// Add messages to array
		messages.push(data);
		ws.clients.forEach(function(clientSocket) {
			// Repeat messages - increment number of repetitions by one each time a message is added
			let i = 0;
			while( i < messages.length) {
				clientSocket.send(data);
				console.log('array equals ' + messages.length);
				i++;
			}
			console.log(messages);
		});
	});
});