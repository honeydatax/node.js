var http = require("http");
var par;
var s="";
http.createServer(function (req, res) {
   s=req.url.toString()
   par=s.split("?")
   console.log(par[0]);
   if (par.length>1) console.log(par[1]);
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end("OK\r\n");
}).listen(8090);

console.log('request server');
