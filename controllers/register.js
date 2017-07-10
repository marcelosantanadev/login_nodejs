exports.getRegisterPage = function (req, res) {
  var context = {
    title: 'Registrar',
    caju: 1
  };

  res.render('register', context);
};

exports.postRegister = function (req, res) {

  var object = req.body;

  console.log(object);
  // var context = {
  //   title: 'Login',
  //   caju: 1
  // };
  //
  // res.render('login', context);
};