module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send(
      {
        // message: `your user was register there! with ${req.body.email}`
        message: `your user was register there! with ${req.body.email}`
      }
    )
  })
}
