var http = require('http');
var server = http.createServer(function(request, response)
{
	console.log("Request Recieved");
	response.write("<b>We are Working...</b>");
	response.end ();
});
server.listen(3000);
