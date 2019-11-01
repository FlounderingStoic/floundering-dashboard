import Sequelize from 'sequelize'

const database = require('../database')

const Snapshot = database.define('snapshot', {
  date: {
    type: Sequelize.DATEONLY,
    unique: true
  }
})

module.exports = Snapshot