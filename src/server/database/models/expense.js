import Sequelize from 'sequelize'

import database from '../database'

const Expense = database.define('expense', {
  value: {
    type: Sequelize.FLOAT
  }
})

module.exports = Expense