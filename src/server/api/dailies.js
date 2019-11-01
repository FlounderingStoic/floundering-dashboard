import express from 'express'

const router = express.Router()
module.exports = router

router.get('/', (req, res, next) => {
  try {
    res.send('Get all dailies')
  } catch (err) {
    next(err)
  }
})