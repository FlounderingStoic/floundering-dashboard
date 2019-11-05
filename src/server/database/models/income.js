import Sequelize from 'sequelize'
import database from '../database'

const Income = database.define('income', {
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

module.exports = Income