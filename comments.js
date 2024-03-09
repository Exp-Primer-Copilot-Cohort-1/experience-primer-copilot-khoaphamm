// Create a web server 
// Create a web server that's going to send a response of "Hello World" for every request it receives
// The server should listen on port 8080
// Use the createServer method from the http module

var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});


server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});





