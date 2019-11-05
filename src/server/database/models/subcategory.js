import Sequelize from 'sequelize'
import database from '../database'

const Subcategory = database.define('subcategory', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = Subcategory