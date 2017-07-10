var requestPromise = require('request-promise');

exports.getLoginPage = function (req, res) {
  var context = {
    title: 'Login',
    caju: 1
  };

  res.render('login', context);
};

exports.postLoginPage = function (req, res) {
  var body = req.body;

  var opt = {
    method: 'POST',
    uri: 'http://localhost:3335/user/login',
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