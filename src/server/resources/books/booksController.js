var Book = require('./Book');

exports.createOne = function(req, res) {
  Book.create(req.body, function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
}
