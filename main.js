var fork = require('child_process').fork;
var cpus = require('os').cpus();
var child;
for (var i = 0; i < cpus.length; i++) {
    child = fork('./workers.js');
    child.on('message',function(msg){
        console.log(msg.toString());
    });
    child.send('OK');
}

