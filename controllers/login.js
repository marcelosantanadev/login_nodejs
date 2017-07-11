var requestPromise = require('request-promise'),
  bcrypt = require('bcrypt'),
  bytearray = require('bytearray'),
  secureRandom = require('secure-random');

exports.getLoginPage = function (req, res) {
  var context = {
    title: 'Login'
  };

  res.render('login', context);
<<<<<<< HEAD
};
=======
}

// function gensalt() {
//   var logRounds = 10;
//   var BCRYPT_SALT_LEN = 16;
//   var random = secureRandom();
//   var rs = StringBuffer();
//   var rnd = bytearray.writeByte(BCRYPT_SALT_LEN);
//
//   random.nextBytes(rnd);
//
//   rs.append("$2a$");
//   if (logRounds < 10)
//     rs.append("0");
//   if (logRounds > 30) {
//     throw Error("logRounds exceeds maximum (30)")
//   }
//
//   rs.append(logRounds.toString());
//   rs.append("$");
//   rs.append(encodeBase64(rnd, rnd.size));
//
//   return rs.toString();
// }
⁠⁠⁠⁠
>>>>>>> eaea72a789194957a040f82138f73d26b7490fcd

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