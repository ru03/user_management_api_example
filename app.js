const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const sequelizeConf = require('./config/sequelize/config');
const logger = require('winston');
const cors = require('cors');
const passport = require('passport');
const indexRouter = require('./routes/index');
const env = require('./config/env');
//Passport config
require('./middleware/jwt/verify');

const app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
// TODO: Change CORS
app.use(cors({
  origin: env.cors.origin,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// })
sequelizeConf.authenticate().then(_ => console.log('auth ok')).catch(err => console.log(err));

app.use('/api/v1/', indexRouter);

module.exports = app;
