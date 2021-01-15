var http = require("http");
var pubs=[ "you can be a web master" , "you can be a programer" , "or you can be just you"] ;
var ppub=0;
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end(pubs[ppub]);
   ppub=ppub+1;
   if (ppub>2) ppub=0;
}).listen(8080);

console.log('pub multi server');
