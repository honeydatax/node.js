var http = require("http");
http.createServer(function (req, res) {
   var ppub=new Date();
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end(ppub.toString());
}).listen(8090);

console.log('counter server');
