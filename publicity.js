var http = require("http");

http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('PUB: visit you site:');
}).listen(8080);

console.log('pub server');
