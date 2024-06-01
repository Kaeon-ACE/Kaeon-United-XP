require("http").createServer((request, response) => {
 
	if(request.url == "/favicon.ico")
		return;
 
	response.setHeader("Content-Type", "text/plain");
	response.write(`THE URL IS: ${request.url}`);

	response.end();
}).listen(80);
