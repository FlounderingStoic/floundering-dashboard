import Sequelize from 'sequelize'

import database from '../database'

const Income = database.define('income', {
  value: {
    type: Sequelize.FLOAT
  }
})

module.exports = Income