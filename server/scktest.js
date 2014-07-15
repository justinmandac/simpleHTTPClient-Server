//implement file reading
var server = require('net');
var socket = new server.Socket();
var fs     = require('fs');
var listenPort = 9000;

//creates a server instance listening at listenPort
server.createServer(function (socket){
	
	socket.on('data', function(data){
	//even handler when data is received from client
		response = 'dong';
		splitHeader = data.toString().split(' ');
		console.log(splitHeader);
		socket.write('<html></html>'); //replace with data
	});
	
}).listen(listenPort, function(){
	console.log('connected at '+listenPort);
});