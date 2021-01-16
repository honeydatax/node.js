var http = require("http");
var cds = require("child_process")
var par;
var s="";
http.createServer(function (req, res) {
	
   s=req.url.toString()
   console.log("\033[0;37;44m");
   s=s.replace("/","");
   par=s.replace("_"," ");
   console.log(par);
   res.writeHead(200, {'Content-Type': 'text/plain'});
   var w =cds.exec( "cal "+par , function (err , out ,se){
	      res.end("\033[0;37;44m"+out+"\r\n"+se);    
   });
      
   
}).listen(8090);

console.log('request server');
