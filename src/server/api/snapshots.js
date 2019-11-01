import express from 'express'

const { Snapshot } = require('../database/models')

const router = express.Router()
module.exports = router

router.get('/', (req, res, next) => {
  try {
    res.send('Get all snapshots')
    next()
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const { date } = req.body
  try {
    await Snapshot.create({ date })
    next()
  } catch (err) {
    next(err)
  }
})