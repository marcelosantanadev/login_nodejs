'use strict';

module.exports = function (app) {
  const ctrl = app.controllers.login;

  app.route('/login')
    .post(ctrl.postLoginPage)
    .get(ctrl.getLoginPage);
};
