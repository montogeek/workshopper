var http = require('http');

var url = process.argv[2];
var dataString = '';

http.get(url, function(response) {
  response.setEncoding('utf-8');
  response.on('data', function(data) {
    dataString += data;
  }).on('end', function() {
    console.log(dataString.length);
    console.log(dataString);
  });
});