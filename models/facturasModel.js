import DataTypes from 'sequelize'
import { loadSequelize } from '../loadSequelize.js'
import { Clientes } from './clientesModel.js'

export const Facturas = loadSequelize.define(
  'Facturas',
  {
    numero: DataTypes.STRING(15),
    fecha: DataTypes.DATEONLY,
    direccion: DataTypes.STRING(150),
    poblacion: DataTypes.STRING(100),
    cpostal: DataTypes.STRING(10),
    nombre: DataTypes.STRING(150),
    ClienteId: {
      type: DataTypes.INTEGER,
      field: 'ClienteId',
      references: {
        model: Clientes,
        key: 'id',
      },
    },
  },
  { tableName: 'Facturas', timestamps: false }
)

Clientes.hasMany(Facturas)
Facturas.belongsTo(Clientes)
