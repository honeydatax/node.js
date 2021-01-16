var http = require("http");
http.createServer(function (req, res) {
   console.log(req.headers.host);
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end("OK\r\n");
}).listen(8090);

console.log('request server');
