var http = require('http');
var http = require('fs');

var content=fs.open('first.html',r);
var server = http.createServer(function(request, response)
{
	response.write(content);
	response.end();
});
server.listen(3000);
