$(function () {
  $(document).ready(function () {

    var loginButton = $('#loginSubmit');
    var loginField = $('input[name=email]');
    var passwordField = $('input[name=password]');

    loginButton.on('click', function () {
      NProgress.start();

      var config = {
        data: {
          "email": loginField.val(),
          "password": passwordField.val()
        },
        route: ''
      };

      $.postToServer(config, function (err, data) {
        if (err)
          console.log('deu erro', err);

        console.log('td certo! ', data);
        NProgress.done();
      })
    });
  });
});