var http = require("http");
var s="";
var i=0;
var ii=0;
http.createServer(function (req, res) {
   console.log(req.url.toString());
   res.writeHead(200, {'Content-Type': 'text/plain'});
   s="";
   for (i=0;i<17;i++){
       ii=Math.floor(Math.random()*9);
       s=s + ii.toString();
   }
   res.end(s+"\r\n");
}).listen(8090);

console.log('request server');
