var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  thumbnail: String,
  title: String,
  author: String,
  description: String
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
