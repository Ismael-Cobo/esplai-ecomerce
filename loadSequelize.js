import { config } from './config/config.js'
import { Sequelize } from 'sequelize'

export const loadSequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
})

loadSequelize.sync().catch((e) => {
  throw new Error(e)
})
