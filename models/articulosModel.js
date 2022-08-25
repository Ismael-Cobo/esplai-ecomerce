import DataTypes from 'sequelize'
import { loadSequelize } from '../loadSequelize.js'

export const Articulos = loadSequelize.define(
  'Articulos',
  {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.FLOAT(10, 2),
    estoc: DataTypes.FLOAT(10, 2),
  },
  { tableName: 'articulos', timestamps: false }
)
