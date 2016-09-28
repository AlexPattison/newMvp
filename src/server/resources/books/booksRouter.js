var booksRouter = require('express').Router();
var booksController = require('./booksController');

booksRouter.route('/')
  .get(function(req, res) {
    booksController.retrieve(req, res);
  })
  .post(function(req, res) {
    booksController.createOne(req, res);
  });

module.exports = booksRouter;
