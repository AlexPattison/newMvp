var express = require('express');
var app = express();
var path = require('path')

app.use(express.static(__dirname + '/../client/'))

app.listen(4000, function() {
  console.log('The server is running dude!!!!')
})
