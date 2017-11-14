module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'gabrielDB',
    user: process.env.DB_USER || 'gabrielDB',
    password: process.env.DB_PASS || 'gabrielDB',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './gabrielDB.sqlite'
    }
  }
}
