var rcount=0;
var http = require('http');
var fs = require('fs');
var net = require('net');

var content = '';

console.log("Server Initialized...");

var server = http.createServer(function(request, response,socket)
{
	//Code to fetch file contents
	fs.readFile('./first.html',function(err,data)
{
	content=data;
	console.log(content);
	response.write(content);
	rcount++;
	console.log('Request : '+rcount);
	response.statuscode=200;
	response.end();

	if(err!=null)
	{
			console.log(err);

	}
});

//Code segments ends here

});
server.listen(3000);
