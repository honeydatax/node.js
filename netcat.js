var nt = require("net");
var args= process.argv.slice(2);
var connection=new nt.Socket();
connection.on('data',onData);
connection.on('close',onClose);
connection.on('error',onError);
connection.connect(args[1].valueOf(),args[0],function(){
		connection.end(args[2]+"\r\n");
		
});
	function onData(data){
		console.log(data.toString());
	}
	function onClose(){
		connection.destroy();
	}
	function onError(data){
		console.log(data);
	}



