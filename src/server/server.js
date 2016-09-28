var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/../client/'));

app.listen(4000, function() {
  console.log('BookClub server is up and running on port 4000')
});

var booksRouter = require('./resources/books/booksRouter');
console.log(booksRouter);

app.use('/', booksRouter);
