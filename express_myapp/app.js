var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// 实现 mvc
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 这样访问 http://35.192.208.76:3000/css/index.css
app.use(express.static(path.join(__dirname, 'public'))); 
// app.use('/static', express.static(path.join(__dirname, 'public'))
// http://localhost:3000/static/css/style.css
// http://localhost:3000/static/js/app.js
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/sui',function(req, res){
  res.send('echo suisuisui');
});

app.post('/sui', function (req, res) {
  res.send('POST request to the homepage')
})

app.get('/sui/article/:id', function (req, res) {
  res.send(req.params)
})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
