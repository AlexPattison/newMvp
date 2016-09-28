var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/books';

mongoose.connect(mongoUri);
var db = mongoose.connection;

exports = db;
