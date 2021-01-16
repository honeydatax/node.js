var http = require("http");
var cds = require("child_process")
var par;
var s="";
http.createServer(function (req, res) {
	
   s=req.url.toString()
   par=s.split("?")
   console.log(par[0]);
   res.writeHead(200, {'Content-Type': 'text/plain'});
   if (par.length>1) {
      if(par[1]=="raspberry"){
         var w =cds.exec( "/usr/bin"+par[0] , function (err , out ,se){
	  res.end(out+"\r\n"+se);    
         });
      }
   }
}).listen(8090);

console.log('request server');
