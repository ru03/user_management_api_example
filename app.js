const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const sequelizeConf = require('./config/sequelize/config');
const logger = require('winston');

const indexRouter = require('./routes/index');

const app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

sequelizeConf.authenticate().then(_ => console.log('auth ok')).catch(err => console.log(err));

app.use('/', indexRouter);

module.exports = app;
