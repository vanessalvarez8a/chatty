var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var messages = [];

app.get('/', function( req, res ) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
});



// app.post('/', function( req, res ) {
//   console.log(req.body);
//   res.end(); // this will make the loading of postman end
// });

app.post('/', function( req, res ) {
  messages.push({
      message: req.body.message,
      time: new Date()
  }); // this is pushing the messages into the array
    res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));

});


app.options('/', function(req, res) {
  res.status(200).set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  }).send();
});

var port = 8989;
app.listen(port, function()  {
  console.log('Listening on hello');
});
