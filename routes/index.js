const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerConf = require('../config/swagger/config.json');
const userRoutes = require('./users');
const authRoutes = require('./auth');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
//Swagger routes
router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(swaggerConf, { isExplorer: true }));
// Users routes
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;
