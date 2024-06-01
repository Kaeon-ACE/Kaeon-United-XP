require("http").createServer((request, response) => {
 
	if(request.url == "/favicon.ico")
		return;
 
	response.setHeader("Content-Type", "text/plain");
	response.write(`THE URI IS: ${request.uri}`);

	response.end();
}).listen(80);
