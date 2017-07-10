$(function () {
  $(document).ready(function () {
    var nameField = $('input[name=name]');
    var lastnameField = $('input[name=lastname]');
    var emailField = $('input[name=email]');
    var phoneField = $('input[name=phone]');
    var passwordField = $('input[name=password]');


    registerButton.on('click', function () {
      NProgress.start();

      var config = {
        route: 'http://api.intelitechnology.com.br/users',
        data: {
          name: nameField.val(),
          lastname: lastnameField.val(),
          email: emailField.val(),
          phone: phoneField.val(),
          password: passwordField.val()
        }
      };

      $.postToServer(config, function (err, data) {
        if (err)
          console.log('deu erro', err);

        console.log('td certo!', data);
        NProgress.done();
      })
    });
  });
});