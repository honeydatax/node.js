var http = require("http");
var ppub=0;
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end(ppub.toString());
   ppub=ppub+1;
}).listen(8081);

console.log('counter server');
