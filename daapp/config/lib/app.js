'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); 


var routes = require('../../app_server/routes/index');
var routesApi = require('../../app_api/routes/index');
var users = require('../../app_server/routes/users');
var db = require('../../app_api/models/db');

var app = express();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var data = {};
var start = new Date();


// view engine setup
app.set('views', path.join(__dirname, '../../app_server', 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser()); 
app.use('/public', express.static(path.join(__dirname, '../../', 'public')));
app.use('/bower_components',  express.static(path.join(__dirname, '../../', 'bower_components')));
app.use('/apidocs',  express.static(path.join(__dirname, '../../', 'apidoc')));

app.use('/', urlencodedParser, routes);
app.use('/api', jsonParser, routesApi);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found ' + req.url);
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}else{
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}

module.exports.start = function(port, cb){
  app.listen(port);
  var end = new Date();
  data.start = start;
  data.end = end;
  data.time = end-start;
  data.port = port;
  if(cb) {cb(null, data);}
};