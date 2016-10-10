//Server
//require/import HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher')

//Port to listen to
const PORT=8080;

//Function for handling requests and sending responses
function handleRequest(request, response) {
	//response.end('It works!! Path Hit: ' + request.url);

	try{
		//request URL on log
		console.log(request.url);

		//Dispatch
		dispatcher.dispatch(request, response);

	} catch(err){
		console.log(err);
	}
}

//create server
var server = http.createServer(handleRequest);

//start server
server.listen(PORT, function() {
	console.log("Server listening on: http://localhost:%s", PORT);	
});

//directory name where static images are contained
dispatcher.setStatic('resources');

//GET Request
dispatcher.onGet("/products", function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Products Page');
});

//POST
dispatcher.onPost("/post1", function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Got Post Data');
});

dispatcher.onPost("/products", function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Got Products Post');
});

