$(function () {
  $(document).ready(function () {

    var loginButton = $('#loginSubmit');
    var registerButton = $('#registerSubmit');
    var loginField = $('#loginField');
    var passwordField = $('#passwordField');


    registerButton.on('click', function () {
      NProgress.start();

      var config = {
        route: 'http://api.intelitechnology.com.br/users',
        data: {

        }
      };

      $.postToServer(config, function (err, data) {
        if (err)
          console.log('deu erro');

        NProgress.done();
      })
    });

    loginButton.on('click', function () {
      NProgress.start();

      var config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          "email":loginField,
          "password": passwordField
        },
        route: 'http://api.intelitechnology.com.br/users/signin'
      };

      $.postToServer(config, function (err, data) {
        if (err)
          console.log('deu erro');

        NProgress.done();
      })
    });
  });
});