var http = require('http')
  , fs = require('fs')
  , options

options = {
    host: '124.109.43.118'
  , port: 5566
  , path: '/'
}

var request = http.get(options, function(res){
    var imagedata = ''
    // res.setEncoding('text/plain')

    res.on('data', function(chunk){
        imagedata += chunk
    })

    res.on('end', function(){
        fs.writeFile('newOriginalLogFileFronServer.txt', imagedata, 'utf8', function(err){
            if (err) throw err
            console.log('File saved.')
        })
    })

})