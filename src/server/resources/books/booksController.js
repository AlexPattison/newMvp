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

exports.retrieve = function(req, res) {
  Book.find({}, function(err, docs) {
    console.log('callback')
    if (err) {
      console.log(err);
    } else {
      console.log('success')
      res.send(docs);
    }
  });
}
