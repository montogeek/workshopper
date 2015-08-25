var fs = require('fs');
var path = require('path');

function createList(dirName, extName, callback) {
	var result = [];
	var filter = '.' + extName;

	fs.readdir(dirName, function(err, list) {
		if(err) return callback(err);

		for(var i = 0; i < list.length; i++) {
			if(path.extname(list[i]) === filter) {
				result.push(list[i]);
			}
		}
		callback(null, result);
	});
}

module.exports = createList;