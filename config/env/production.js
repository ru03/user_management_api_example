const production = {
  database: {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
  },
  logging: {
    deployment: 'PROD',
    level: 'verbose',
  },
  jwt: {
    expiresIn: 3600,
    secret: process.env.JWT_SECRET
  }
}

module.exports = production;