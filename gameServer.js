var http = require("http");
var s="";
var i=0;
var ii=0;
var iii=0;
var iiii=0;
var aaa=Array(16*22);
var map="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   for (i=0;i<16;i++){
	for(iii=0;iii<20;iii++){
	       aaa[22*i+iii]=' ';
	}
	s=s +"\r\n";
   }
   for (i=0;i<16;i++){
	       aaa[i*22+20]='\r';
	       aaa[i*22+21]='\n';

	s=s +"\r\n";
   }

http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   for (i=0;i<16;i++){
	for(iii=0;iii<20;iii++){
	       ii=Math.floor(Math.random()*23);
       	       aaa[i*22+iii]=map[ii];
	}

   }
   s=aaa.join();
   s=s.replace(/,/gi,"");
   res.end(s);
}).listen(8090);

console.log('request server');
