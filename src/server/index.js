import express from 'express';

const PORT = process.env.PORT || 8080
const app = express();

app.use('/api', require('./api'))

app.listen(PORT, () => {
  console.log('Listening on ', PORT)
})
