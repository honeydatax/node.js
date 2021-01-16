var fs = require("fs"); 
var http = require("http");
var s="";
http.createServer(function (req, res) {
   var v="";
   var vvv="";
   var vv=req.url.toString();
   var sss="";
   res.writeHead(200, {'Content-Type': 'text/plain'});
   vv="/home/pi" + vv;
   s=""
   fs.readdir ( vv , function  ( err , s ){
     s.forEach(function (ss) {
       sss=sss+ss+"\r\n";
     });
     res.end (sss);
   });
   
}).listen(8090);

console.log('request server');
