const dev = {
  database: {
    name: 'DB Name',
    host: 'HOST',
    password: 'PASS',
    port: 8889,
    user: 'USER',
  },
  logging: {
    deployment: 'DEV',
    level: 'info',
  },
  jwt: {
    expiresIn: 3600,
    secret: 'Your_JWT_Secret!'
  }
}

module.exports = dev;
