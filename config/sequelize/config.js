const Sequelize = require('sequelize');
const config = require('../env');
console.log('Env', process.env.NODE_ENV)
console.log('config', config)
const sequelize = new Sequelize(
  config.database.name,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    port: config.database.port,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    }
  }
);

module.exports = sequelize;