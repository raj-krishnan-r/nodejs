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
	var time = new Date;
	content=data;
	content='<!--Served from Greed-2 [Node.js server] on '+time+'  -->\n'+content;
	response.write(content);
	rcount++;
	console.log('Request : '+rcount);
	response.statusCode=404;
	response.end();

	if(err!=null)
	{
			console.log(err);

	}
});

//Code segments ends here

});
server.listen(3000);
