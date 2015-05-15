var fs = require('fs');
var pathToFile = "../collectionserver/serverLogFile.log";


function readFile(callback) {
    var bufferString;
    fs.readFile(pathToFile, function(err, data) {
        bufferString = data.toString();
        bufferStringSplit = bufferString.split('\n');
        callback(bufferStringSplit);
    });
}

function printLine(bufferStringSplit) {
    console.log(bufferStringSplit);
}

function searchImeiNumbers(bufferStringSplit) {
    var imeiNumbersList = {};
    for (var i in bufferStringSplit) {
        if (bufferStringSplit[i]) {
            row = JSON.parse(bufferStringSplit[i]);
            if (row.imei in imeiNumbersList)
                imeiNumbersList[row.imei]++;
            else
                imeiNumbersList[row.imei] = 0;
        }
    }
    console.log(imeiNumbersList);
}

readFile(printLine);