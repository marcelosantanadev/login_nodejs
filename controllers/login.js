var requestPromise = require('request-promise'),
  bcrypt = require('bcrypt'),
  bytearray = require('bytearray'),
  secureRandom = require('secure-random');

exports.getLoginPage = function (req, res) {
  var context = {
    title: 'Login'
  };

  res.render('login', context);
}

exports.postLoginPage = function (req, res) {
  var body = req.body;
  var salt = bcrypt.genSaltSync(10);
  var passwordEncrypted = bcrypt(body.password);

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