import Sequelize from 'sequelize'
import database from '../database'

const Category = database.define('category', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = Category