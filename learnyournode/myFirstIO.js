var fs = require('fs');

var file = process.argv[2];

var result = 0;

var stream = fs.readFileSync(file, 'utf-8');

result = stream.split('\n').length - 1;

console.log(result);
