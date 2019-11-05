import Category from './category'
import Expense from './expense'
import Income from './income'
import Snapshot from'./snapshot'
import Subcategory from './subcategory'

Category.hasMany(Subcategory)

Expense.belongsTo(Snapshot)
Expense.hasOne(Category)
Expense.hasOne(Subcategory)

Income.belongsTo(Snapshot)
Income.hasOne(Category)
Income.hasOne(Subcategory)

Snapshot.hasMany(Expense)
Snapshot.hasMany(Income)

Subcategory.belongsTo(Category)

module.exports = {
  Category,
  Expense,
  Income,
  Snapshot,
  Subcategory
}