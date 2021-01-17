var http = require("http");
var s="";
var i=0;
var ii=0;
var iii=0;
var iiii=0;
var map="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   s="\r\n\r\n";
   for (i=0;i<20;i++){
	for(iii=0;iii<16;iii++){
	       ii=Math.floor(Math.random()*23);
       	       s=s + map[ii].toString();
	}
	s=s +"\r\n";
   }
   res.end(s);
   console.log(iiii.toString());
   iiii=iiii+1;
}).listen(8090);

console.log('request server');
