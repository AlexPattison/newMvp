var booksRouter = require('express').Router();
var booksController = require('./booksController');

booksRouter.route('/')
  .get(function(req, res) {
    booksController.retrieve(req, res);
  });

module.exports = booksRouter;
