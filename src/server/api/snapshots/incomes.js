import express from 'express'

import { Income, Snapshot } from '../../database/models'

const router = express.Router()
module.exports = router

// /api/snapshots/:snapshotId/incomes

/**
 * @return all incomes for this snapshot
 */
router.get('/', async (req, res, next) => {
  const { snapshotId } = req.params
  try {
    const incomes = await Income.findAll({
      where: { snapshotId }
    })
    res.send(incomes)
  } catch (err) {
    next(err)
  }
})

/**
 * create new income for this snapshot
 */
router.post('/', async (req, res, next) => {
  try {
    const income = await Income.build(req.body)
    const snapshot = await Snapshot.findByPk(req.params.snapshotId)
    await income.setSnapshot(snapshot, { save: false })
    await income.save()
    res.send(income)
  } catch (err) {
    next(err)
  }
})