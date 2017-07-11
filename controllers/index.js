var requestPromise = require('request-promise');


exports.getIndexPage = function (req, res) {
  var context = {
    title: 'Index'
  };

  res.render('index', context);
};

exports.postIndexPage = function (req, res) {
  var body = req.body;

  var opt = {
    method: 'POST',
    uri: 'http://api.intelitechnology.com.br/users/signin',
    json: true,
    body: {
      email: body.email,
      password: body.password
    }
  };

  requestPromise(opt)
    .then(function (body) {
      res.redirect('/restrict/users');
    })
    .catch(function (err) {
      console.log(err);
    });
};