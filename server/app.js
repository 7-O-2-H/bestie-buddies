const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const corsOptions = {
  origin: "http://127.0.0.1:5173",
  credentials: true,
};

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const reviews = require('./routes/reviews');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/api', reviews);

module.exports = app;
