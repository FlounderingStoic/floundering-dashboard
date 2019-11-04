import Expense from './expense'
import Income from './income'
import Snapshot from'./snapshot'

Expense.belongsTo(Snapshot)
Income.belongsTo(Snapshot)

Snapshot.hasMany(Expense)
Snapshot.hasMany(Income)

module.exports = {
  Expense,
  Income,
  Snapshot
}