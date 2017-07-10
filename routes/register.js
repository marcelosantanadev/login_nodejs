'use strict';

module.exports = function (app) {
  const ctrl = app.controllers.register;

  app.route('register')
    .post(ctrl.postRegister)
    .get(ctrl.getRegisterPage);
};
