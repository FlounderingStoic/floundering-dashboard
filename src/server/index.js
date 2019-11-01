const express = require('express')

const PORT = process.env.PORT || 8080

const app = express();

app.listen(PORT, () => {
  console.log('Listening on ', PORT)
})

app.get('/', (req, res, next) => {
  res.send('Hello World')
})