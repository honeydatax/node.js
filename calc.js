var http = require("http");
var v="";
var vv="";
http.createServer(function (req, res) {
   v=req.url;
   vv="error";
   res.writeHead(200, {'Content-Type': 'text/plain'});
   try{
   v=v.replace("/","")
   vv=eval(v);
   }catch (errrr) {}
   res.end(vv + "=" + v);
}).listen(8090);

console.log('request server');
