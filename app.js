var express = require('express');

var path = require('path');

var favicon = require('serve-favicon');
var expressLoad = require('express-load');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

/*
 *  TODO Rotas do app
 *
 * */

expressLoad('controllers', {verbose: true})
  .then('routes')
  .into(app, function (err, instance) {
    if (err) throw err;

    // app.use('/', app.routers.index);
    // app.use('/login', app.routers.login);
    // app.use('/register', app.routers.register);
    // app.use('/restrict', app.routers.restrict);
  });

/*
 * TODO Middleware de error
 *
 * */

// Error 404
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error 500
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
