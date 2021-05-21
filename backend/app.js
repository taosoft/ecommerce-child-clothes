const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose')
const bluebird = require('bluebird')
require('dotenv/config');

const usersRouter = require('./routes/users');
const salesRouter = require('./routes/sales');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/sales', salesRouter);

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

// Connection to MongoDB
mongoose.Promise = bluebird;
const url = process.env.DB_CONNECTION;
const opts = {
  useNewUrlParser : true, 
  connectTimeoutMS: 20000, 
  useUnifiedTopology: true
  };

mongoose.connect(url,opts)
  .then(() => {
    console.log(`Succesfully Connected to Mongodb...`)
  })
  .catch((e) => {
    console.log(`Error Connecting to Mongodb...`),
    console.log(e)
  })

// Setup server port
var port = process.env.PORT || 8080;
// Escuchar en el puerto
app.listen(port,()=>{
    console.log(`Listening on port: ${port}`);
});

module.exports = app;
