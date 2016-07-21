var http = require('http');
var server = http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n');
});
var port = Math.round((1 + Math.random()) * 1000);
server.listen(port,'127.0.0.1');
//console.log('http Server running on '+port+'......');
process.send(process.pid+ 'running on '+ port);
/*process.on('message',function(msg){
    console.log(msg.toString());
});*/