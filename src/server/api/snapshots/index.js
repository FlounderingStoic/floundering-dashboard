import express from 'express'

import { Expense, Snapshot } from '../../database/models'

const router = express.Router()
module.exports = router

router.use('/:snapshotId/incomes', require('./incomes'))
router.use('/:snapshotId/expenses', require('./expenses'))

/**
 * @return snapshot with this id
 */
router.get('/:snapshotId', async (req, res, next) => {
  try {
    const snapshot = await Snapshot.findByPk(req.params.snapshotId)
    res.send(snapshot)
  } catch (err) {
    next(err)
  }
})

/**
 * @return all snapshots
 */
router.get('/', async (req, res, next) => {
  try {
    const snapshots = await Snapshot.findAll()
    res.send(snapshots)
  } catch (err) {
    next(err)
  }
})

/**
 * creates a new snapshot
 */
router.post('/', async (req, res, next) => {
  const { date } = req.body
  try {
    const snapshot = await Snapshot.create({ date })
    res.send(snapshot)
  } catch (err) {
    next(err)
  }
})