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

app.post('/register', (req, res) => {
  res.send(
    {
      // message: `your user was register there! with ${req.body.email}`
      message: `your user was register there! with ${req.body.email}`
    }
  )
})

app.listen(process.env.PORT || 8081)
