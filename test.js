var http = require('http');
var httpServ = http.createServer(function(req,res){
    res.write('hello');
    res.end();
}).listen(8082);