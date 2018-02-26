var path = require('path');
// Media Type
var mime = require('mime');

var extractFilePath = function(url) {
	var filePath;
	var fileName = 'index.html';

	if (url.length > 1) {
		fileName = url.substring(1);
	}
	console.log('The file name is ' + fileName);

	filePath = path.resolve(__dirname, 'app', fileName);
	// console.log(path.extname(filePath));
	// var fileExtension = path.extname(filePath);
	// var contentType = mime.getType(fileExtension);

	return filePath;
};	

// Assign extractFilePath function to a global variable
module.exports = extractFilePath;