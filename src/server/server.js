var express = require('express');
var app = express();
var path = require('path')
var mongoose = require('../db/mongooseTest.js')

app.use(express.static(__dirname + '/../client/'))

app.listen(5000, function() {
  console.log('The server is running dude!!!!')
})
