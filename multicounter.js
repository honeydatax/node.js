var http = require("http");
var cds = require("child_process")
var par="";
var s="";
var a=Array(2000);
var i=0;
for (i=0;i<200;i++)a[i]=0
http.createServer(function (req, res) {
   console.log(req.headers.host.toString())
   s=req.url.toString()
   par=s.replace("/","")
   console.log(par);
   res.writeHead(200, {'Content-Type': 'text/plain'});
   if (par=="") par="0"
   if (par[0] >'0'- 1 && par[0] <'9'+ 1){
         i=par.valueOf();
	if (i<2000 && i > - 1){ 
		a[i]=a[i]+1;
                res.end(a[i].toString()+"\r\n");    
        }else{
                res.end("0\r\n");    
        }
   }
      
   
}).listen(8090);

console.log('request server');
