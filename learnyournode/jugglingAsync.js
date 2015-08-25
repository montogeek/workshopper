var http = require('http');

var idx = 0;
var result = {};

for (var i = 2; i < process.argv.length; i++) {
  (function(url, index) {
    http.get(url, function(response) {
      result[index] = ''
      response.setEncoding('utf-8');
      response.on('data', function(data) {
        result[index] += data;
      });

      response.on('end', function() {
        var resultLength = Object.keys(result).length;

        if(resultLength === 3) {
          for (var j = 0; j < resultLength; j++) {
            console.log(result[j]);
          }
        }
      });
    });
  })(process.argv[i], idx++);
}