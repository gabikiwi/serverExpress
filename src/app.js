console.log('server express starting')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
// allow our application to easly parse any JSON that are send in
app.use(bodyParser.json())
// for security allow a server to be hosted on a different domain.
app.use(cors())

app.get('/status', (req, res) => {
  res.send(
    {
      message: 'Hello there!'
    }
  )
})

app.listen(process.env.PORT || 8081)
