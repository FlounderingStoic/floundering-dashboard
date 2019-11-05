import Sequelize from 'sequelize'
import database from '../database'

const Expense = database.define('expense', {
  name: {
    type: Sequelize.STRING
  },
  note: {
    type: Sequelize.STRING
  },
  value: {
    type: Sequelize.FLOAT
  }
})

module.exports = Expense