var http = require("http");
var cds = require("child_process")
var par="";
var s="";
http.createServer(function (req, res) {
   console.log(req.headers.host)
   s=req.url.toString()
   par=s.replace("?"," ")
   console.log(par[0]);
   res.writeHead(200, {'Content-Type': 'text/plain'});
   if (req.headers.host=="127.0.0.1:8090") {
      
         var w =cds.exec( "/usr/bin"+par + " & " , function (err , out ,se){
	  res.end(out+"\r\n"+se);    
         });
      
   }
}).listen(8090);

console.log('request server');
