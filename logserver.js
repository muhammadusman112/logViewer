var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');

http.createServer(function(request, response) { 
    var filePath = 'C:/work/collectionserver/serverLogFile.log';
    var stat = fileSystem.statSync(filePath);
    
    response.writeHead(200, {
        'Content-Type': 'text/plain', 
        'Content-Length': stat.size
    });
    
    var readStream = fileSystem.createReadStream(filePath);
    readStream.on('data', function(data) {
        response.write(data);
    });
    
    readStream.on('end', function() {
        response.end();        
    });
})
.listen(5566, '124.109.43.118');




