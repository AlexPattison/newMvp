var booksRouter = require('express').Router();
var booksController = require('./booksController');

booksRouter.route('/')
  .get(booksController.retrieve)
  .post(booksController.createOne);

module.exports = booksRouter;
