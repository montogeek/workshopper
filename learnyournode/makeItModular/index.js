var filtered = require('./filteredList');

filtered(process.argv[2], process.argv[3], function(err, data) {
	if(err) console.log('Error');
	console.log(data.join('\n'));
});