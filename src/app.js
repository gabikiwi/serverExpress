console.log('server express starting')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// adding sequelize
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
// allow our application to easly parse any JSON that are send in
app.use(bodyParser.json())
// for security allow a server to be hosted on a different domain.
app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 8081)
    console.log(`Server started on port ${config.port}`)
  }

)

//app.listen(process.env.PORT || 8081)
