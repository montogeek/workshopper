var fs = require('fs');
var path = require('path');

var filter = '.' + process.argv[3];

function createList(err, list) {
	for(var i = 0; i < list.length; i++) {
		if(path.extname(list[i]) === filter) {
			console.log(list[i]);
		}
	}
}

fs.readdir(process.argv[2], createList);