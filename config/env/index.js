const dev = require('./dev');
const production = require('./production');
const env = process.env.NODE_ENV;

const config = env ? { dev, production } : dev;

module.exports = config;