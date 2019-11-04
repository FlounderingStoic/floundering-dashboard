import express from 'express'

import { Expense, Snapshot } from '../../database/models'

const router = express.Router()
module.exports = router

router.get('/', async (req, res, next) => {
  const { snapshotId } = req.params
  try {
    const expenses = await Expense.findAll({
      where: { snapshotId }
    })
    res.send(expenses)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const expense = await Expense.build(req.body)
    const snapshot = await Snapshot.findByPk(req.params.snapshotId)
    await expense.setSnapshot(snapshot, { save: false })
    await expense.save()
    res.send(expense)
  } catch (err) {
    next(err)
  }
})