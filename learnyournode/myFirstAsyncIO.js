var fs = require('fs');

var file = process.argv[2];

var result = 0;

fs.readFile(file,  readNewLines);

function readNewLines(err, data) {
	if(err) throw err;
	result = data.toString().split('\n').length - 1;
	console.log(result);
}
