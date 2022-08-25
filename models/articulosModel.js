import DataTypes from 'sequelize'
import { loadSequelize } from '../loadSequelize.js'

export const Articulos = loadSequelize.define(
  'Articulos',
  {
    nombre: DataTypes.STRING(150),
    descripcion: DataTypes.STRING(1500),
    precio: DataTypes.FLOAT(10, 2),
    estoc: DataTypes.FLOAT(10, 2),
  },
  { tableName: 'articulos', timestamps: false }
)
