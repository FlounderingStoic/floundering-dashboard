import Sequelize from 'sequelize'

import database from '../database'

const Snapshot = database.define('snapshot', {
  date: {
    type: Sequelize.DATEONLY,
    unique: true
  }
})

module.exports = Snapshot