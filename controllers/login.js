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
  //var salt = bcrypt.genSaltSync(15);
  //var passwordEncrypted = bcrypt(body.password);
  //console.log(passwordEncrypted);
  var opt = {
    method: 'POST',
    url: 'http://api.intelitechnology.com.br/users/signin',
    json: true,
    header: {
      "Content-Type" : "application/x-www-form-urlencoded",
    },
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