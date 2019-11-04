import express from 'express'

const router = express.Router()
module.exports = router

router.use('/snapshots', require('./snapshots'))