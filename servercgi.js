var http = require("http");
var cds = require("child_process")
var par="";
var s="";
http.createServer(function (req, res) {
   console.log(req.headers.host.toString())
   s=req.url.toString()
   par=s.replace("?"," ")
   console.log(par);
   res.writeHead(200, {'Content-Type': 'text/plain'});
   if (par=="/") par="/main"     
         var w =cds.exec( "/home/pi"+par + " & " , function (err , out ,se){
	  res.end(out+"\r\n"+se);    
         });
      
   
}).listen(8090);

console.log('request server');
