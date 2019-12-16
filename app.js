const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

const parseString = require('xml2js').parseString;

require('body-parser-xml')(bodyParser);
app.use(bodyParser.xml({limit: '200mb'}));

file_number = 0;

app.get('/', function(_req, res) {
    res.send("Hello World! :)");
});

app.get('/sensorpush', function (_req, res) {
    res.send("This is a page to take in equage data. Hey!");
});

app.post('/sensorpush', function (req, res) {
    var xmlbody = req.body;
    

    parseString(xmlbody, function(_err, _result) {
        var jsonbody = JSON.stringify(xmlbody, undefined, 2)
        fs.writeFile('egauge-packet' + file_number + '.txt', jsonbody, function(_err, result){
            console.log('The file has been saved!');
            file_number += 1;
          });
    })

    res.send("recieved!");


});

app.listen(3000, function() {
    console.log("Server is listening on port 3000 :)");
});

