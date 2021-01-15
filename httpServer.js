var fs = require("fs"); 
var http = require("http");
var s="";
http.createServer(function (req, res) {
   var v="";
   var vv=req.url.toString();
   res.writeHead(200, {'Content-Type': 'text/plain'});
   if ( vv == "/" ) vv="/main.html";
   vv="/home/pi" + vv;
   fs.readFile ( vv , function  ( err , s ){
    if (err) console.log(err);
    res.end ( s);
    });
   
}).listen(8090);

console.log('request server');
