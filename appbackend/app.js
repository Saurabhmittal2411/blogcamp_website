var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose= require('mongoose');
// var axios= require('axios');
// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/auth');
var postRouter = require('./routes/posts');
// var adminRouter = require('./routes/admin');
// var productRouter = require('./routes/product');
var userRouter = require('./routes/user');
var categoryRouter = require('./routes/categories');


const cors = require('cors');

var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/auth', usersRouter);
// app.use('/admin', adminRouter);
// app.use('/product', productRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/category', categoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
mongoose.connect('mongodb://127.0.0.1:27017/blogdb', 
 
// { useNewUrlParser: true }, (err) => {
//   if (err) {
//     console.log(err)
//   }
//   else {
    console.log("Db Connected")
//   }
 
// }

)
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
