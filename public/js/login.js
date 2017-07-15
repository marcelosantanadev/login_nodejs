$(function () {
  $(document).ready(function () {

    var loginButton = $('#loginSubmit');
    var loginField = $('#emailField');
    var passwordField = $('#passwdField');
    
    loginButton.on('click', function () {
      NProgress.start();
      
      alert(loginField.val());
      var config = {
          method: 'POST',
          route: 'http://api.intelitechnology.com.br/users/signin',
          header: {
            "Content-Type" : "application/x-www-form-urlencoded"
          },
          body: {
            email : loginField.val(),
            password : passwordField.val()
          },
          json: true
      };

      $.postToServer(config, function (err, data) {
        if (err)
          console.log('deu erro no post', err);

        console.log('td certo no post! ', data);
        NProgress.done();
      })
    });
  });
});