var express = require('express');
var cors = require('cors');

var csv = require('csv-parser');
var fs = require('fs');

var app = express();


// Allow all in cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


var list = [];
app.get('/', (req, res) => {

    fs.createReadStream('ICPC Dhaka 2019 collecting photos (Responses) - Form Responses 1.csv')
	.pipe(csv())
	.on('data', (data) => {
        
        var institute = 'Name of the University';
        var team_name = 'Name of the team';
        var coach_name = 'Name of the coach';
        var c1_name = 'Name of contestant 1';
        var c2_name = 'Name of contestant 2';
        var c3_name = 'Name of contestant 3';
        var cm_id = 'CM ID';

        list.push({
            institute: data[institute],
            team_name: data[team_name],
            coach_name: data[coach_name],
            c1_name: data[c1_name],
            c2_name: data[c2_name],
            c3_name: data[c3_name],
            cm_id: data[cm_id]
        });
    })
    .on('end', () => {

        list = list.sort((a,b) => {
            return a.institute > b.institute ? 1 : -1
        });

        res.send(list);
        list = [];
    });
});

app.get('/url', (req, res) => {
    res.send('Hey!')
});

app.listen(3001, () => {
 console.log("Server running on port 3001");
});



