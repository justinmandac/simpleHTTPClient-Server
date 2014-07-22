//browser
var connection = require('net');
var parseURL   = require('url');
var requestURL = process.argv[2];
var remote = false; //flag indicating if the destination is located on localhost or on a remote location

//parse request URL. Naked URLs are not accepted at the moment. 
urlObject = parseURL.parse(requestURL,true,false);
hostname  = urlObject.hostname;
port      = urlObject.port;
resPath   = urlObject.path;

//build HTTP request header
var requestHeader ='GET '+resPath+' HTTP/1.1\n';
//implement GET request and waits for a response from the server.
//create module for request and response functions
get(hostname,port,requestHeader); 

//export as a module soon
function get(hostname,port,data)
{
	var dataAvailable = false;
	socket = new connection.Socket();
	try{	
		socket.connect(port,hostname);
		socket.write(data);	
	}catch (e){	}
	socket.on('data',function (data){
		console.log(data.toString());
		dataAvailable = true;
	});
	if(!dataAvailable)
		socket.end();
}