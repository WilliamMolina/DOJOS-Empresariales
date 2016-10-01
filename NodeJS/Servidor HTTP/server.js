var http=require('http');
var url=require('url');

function start(route,handle){
	function onRequest(request,response){
		var pathname=url.parse(request.url).pathname;
		console.log('Petición para '+ pathname+ ' fue recibido');
		route(handle,pathname,response);
	}
	http.createServer(onRequest).listen(8888);
	console.log('Servidor iniciado');
}
exports.start=start;