http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World!!!');
}).listen(8081);

console.log('http Server is running on 8081......');