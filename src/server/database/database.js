import Sequelize from 'sequelize'

const database = new Sequelize(
  'postgres://localhost:5432/floundering-dashboard',
  { logging: false }
)

module.exports = database