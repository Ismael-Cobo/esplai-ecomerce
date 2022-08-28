import DataTypes from 'sequelize'
import { loadSequelize } from '../loadSequelize.js'
import { Facturas, Articulos } from './index.js'

export const Articulos_Facturas = loadSequelize.define(
  'Lineas',
  {
    cantidad: DataTypes.FLOAT(10, 2),
    FacturaId: {
      type: DataTypes.INTEGER,
      field: 'FacturaId',
      references: {
        model: Facturas,
        key: 'id',
      },
    },
    ArticuloId: {
      type: DataTypes.INTEGER,
      field: 'ArticuloId',
      references: {
        model: Articulos,
        key: 'id',
      },
    },
  },
  { tableName: 'articulos_facturas', timestamps: false }
)

// Facturas.belongsToMany(Articulos, { through: Articulos_Facturas })
// Articulos.belongsToMany(Facturas, { through: Articulos_Facturas })

// Setup a One-to-Many relationship between User and Grant
Facturas.hasMany(Articulos_Facturas)
Articulos_Facturas.belongsTo(Facturas)

// Also setup a One-to-Many relationship between Profile and Grant
Articulos.hasMany(Articulos_Facturas)
Articulos_Facturas.belongsTo(Articulos)
