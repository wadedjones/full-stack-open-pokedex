const express = require('express')
require('dotenv').config()
const app = express()

// Heroku dynamically sets a port
const PORT = 8080

app.use(express.static('dist'))

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Server started on PORT ${PORT}`)
  /* es-lint-enable no-console */
})
