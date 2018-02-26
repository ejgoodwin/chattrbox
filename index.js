// Node's built-in 'require' function
// Use this function to access the http module which is included in Node
var http = require('http');
// Imoport Node's file system module
var fs = require('fs');

// Import extract.js to use extractFilePath function
var extract = require('./extract');

var wss = require('./websockets-server.js');

var handleError = function(err, res) {
	res.writeHead(404);
	res.end();
};

// http.createServer is a function provided by the http module
// It takes a funciton as an argument - this function is called for every http request
// req and res are variable names for HTTP request and response objects
var server = http.createServer(function (req, res) {
	console.log('Responding to a request.');

	var filePath = extract(req.url);
	//readFile method takes a file name and a callback
	//Callback - send contents of file res.end() -> response
	fs.readFile(filePath, function(err, data) {
		if(err) {
			handleError(err, res);
			return;
		} else {
			res.setHeader('Content-Type', 'text/html');
			res.end(data);
		}
	});
});

// Tell server to listen at port 3000
// Commonly known as "Binding to a port"
server.listen(3000);