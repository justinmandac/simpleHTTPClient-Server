//implement file reading
var server = require('net');
var socket = new server.Socket();
var fs     = require('fs');
var listenPort = 9000;

//creates a server instance listening at listenPort
server.createServer(function (socket){
	socket.on('data', function(data){
	//even handler when data is received from client
		splitHeader = data.toString().split(' ');
		console.log(splitHeader);
		//check what kind of request is made
		if(splitHeader[0] == 'GET')
		{
			//acquire file specified in the resource path (splitHeader[1])
			file = '';
			filename = '';
			if (splitHeader[1] == '/')
			{
				filename = './index.html';
			}
			else
			{
				filename = '.'+splitHeader[1];
			}
			file = fs.readFileSync(filename);
			socket.write(file.toString()); //replace with data
		}
	});
	
}).listen(listenPort, function(){
	console.log('connected at '+listenPort);
});