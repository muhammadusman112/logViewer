var _ = require('underscore');
var http = require('http');
var fs = require('fs');

// var viewObject = new viewObject();

function modelObject() {

    var pathtofile = "newOriginalLogFileFronServer.txt";
    var options = {
        host: '124.109.43.118',
        port: 5566,
        path: '/'
    }
    var inMemoryFile = "";

    this.getFile = function(cb) {
        if (!inMemoryFile) {
            var request = http.get(options, function(res) {
                var imagedata = ''
                res.on('data', function(chunk) {
                    imagedata += chunk
                    inMemoryFile += chunk
                });

                res.on('end', function() {
                    fs.writeFile('newOriginalLogFileFronServer.txt', imagedata, 'utf8', function(err) {
                        //readFile(searchImeiNumbers);
                        if (err) throw err
                        console.log('File saved.');

                        modelObject.readFile(cb);
                    });
                });

            });
        } else {
                  $("#imeiNumbers").html("");
        $("#logs").html("");
            modelObject.readFile(cb);
        }
    };

    this.readFile = function(cb) {

        var bufferString;
        fs.readFile(pathtofile, function(err, data) {
            bufferString = data.toString();
            bufferStringSplit = bufferString.split('\n');
            inMemoryFile = bufferStringSplit;
            modelObject.searchImeiNumbers(cb);
            // callback(bufferStringSplit, filter);
        });
    };
    this.loadLogEntries = function(filter,cb) {
        var logEntries = [];
        for (var i in inMemoryFile.reverse()) {
            if (inMemoryFile[i]) {
                row = JSON.parse(inMemoryFile[i]);
                if (row.imei == filter)
                    logEntries.push(row);
            }
        }
        cb(filter,logEntries);
    }

    this.searchImeiNumbers = function(cb) {
        var imeiNumbersList = {};
        for (var i in inMemoryFile) {
            if (inMemoryFile[i]) {
                row = JSON.parse(inMemoryFile[i]);
                if (row.imei in imeiNumbersList)
                    imeiNumbersList[row.imei]++;
                else
                    imeiNumbersList[row.imei] = 0;
            }
        }
        cb(imeiNumbersList);
    }

    this.loadLogEntriesTimeFilter = function(dateFilter,imei,cb) {
        var logEntries = [];
        for (var i in inMemoryFile.reverse()) {
            if (inMemoryFile[i]) {
                row = JSON.parse(inMemoryFile[i]);
                if (row.imei == imei && row.time.indexOf(dateFilter) > -1 )
                    logEntries.push(row);
            }
        }
        cb(imei, logEntries);
//console.log(dateFilter);
    }


};