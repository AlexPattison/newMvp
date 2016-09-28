var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/books';

mongoose.connect(mongoUri);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {

});

module.exports = db;

// Where is the db being exported to?
