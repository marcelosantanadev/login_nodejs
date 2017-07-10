exports.getRestrictPage = function (req, res) {
  var context = {
    title: 'Area restrita'
  };

  res.render('restrict/users', context);
};
