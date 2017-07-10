$(function () {
  $(document).ready(function () {

    var loginButton = $('#loginSubmit');
    var registerButton = $('#registerSubmit');


    registerButton.on('click', function () {
      NProgress.start();

      var config = {
        headers: {
          auth: ''
        },
        route: 'http://localhost:3335/users/register'
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
          auth: ''
        },
        route: 'http://localhost:3335/users/login'
      };

      $.postToServer(config, function (err, data) {
        if (err)
          console.log('deu erro');

        NProgress.done();
      })
    });
  });
});