import DataTypes from 'sequelize'
import { loadSequelize } from '../loadSequelize.js'

export const Clientes = loadSequelize.define(
  'Clientes',
  {
    email: DataTypes.STRING(150),
    nombre: DataTypes.STRING(150),
    direccion: DataTypes.STRING(150),
    poblacion: DataTypes.STRING(150),
    cpostal: DataTypes.STRING(10),
    password: DataTypes.STRING(150),
  },
  { tableName: 'clientes', timestamps: false }
)
