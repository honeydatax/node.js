var http = require("http");
var args= process.argv.slice(2);
var options={
	hostname: args[0],
	port: args[1],
	path: args[2],
	method:"GET"
}
	var req=http.request(options,res => {
		res.on('data',d => {
			process.stdout.write(d)
		})
	});
		req.on('error',d => {
		console.log(d) })
	req.end();
