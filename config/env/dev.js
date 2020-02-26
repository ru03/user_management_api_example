const dev = {
  database: {
    name: 'user_management',
    host: 'localhost',
    password: 'root',
    port: 8889,
    user: 'root',
  },
  cors: {
    origin: '*'
  },
  logging: {
    deployment: 'DEV',
    level: 'info',
  },
  jwt: {
    expiresIn: 3600,
    secret: 'Mysecret1!'
  }
}

module.exports = dev;
