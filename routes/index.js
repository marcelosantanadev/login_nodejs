'use strict';

module.exports = function (app) {
  const ctrl = app.controllers.index;

  app.route('')
    .post(ctrl.postIndexPage)
    .get(ctrl.getIndexPage);
};
