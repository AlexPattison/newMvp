var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/books';

mongoose.connect(mongoUri);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

exports = db;
