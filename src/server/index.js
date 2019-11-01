import express from 'express';
import bodyParser from 'body-parser'

import database from './database'

const PORT = process.env.PORT || 8080
const app = express();

database.sync()

app.use(bodyParser.json())
app.use('/api', require('./api'))

app.listen(PORT, () => {
  console.log('Listening on ', PORT)
})
