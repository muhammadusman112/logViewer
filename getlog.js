var http = require('http'),
    fileSystem = require('fs'),
    url = require("url"),
    path = require('path');

http.createServer(function(request, res) {
 var filePath = path.join('http://124.109.43.118', 'see.txt');
var stat = fileSystem.statSync(filePath);
    
 
        res.writeHead(200, {'Content-Type': 'text/plain'});

 res.end('helo');
    
    var readStream = fileSystem.createReadStream(filePath);
    readStream.on('data', function(data) {
        response.write(data);
    });
    
    readStream.on('end', function() {
        response.end();        
    });
})
.listen(2000, '127.0.0.1');


console.log('Server running at http://127.0.0.1:2000');