import DataTypes from 'sequelize'
import { loadSequelize } from '../loadSequelize.js'

export const Articulos = loadSequelize.define(
  'Articulos',
  {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    estoc: DataTypes.FLOAT,
  },
  { tableName: 'articulos', timestamps: false }
)
