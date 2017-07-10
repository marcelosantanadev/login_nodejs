'use strict';

module.exports = function (app) {
  const ctrl = app.controllers.restrictUser;

  app.route('/restrict/users').get(ctrl.getRestrictPage);
};
