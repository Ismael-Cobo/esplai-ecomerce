import { response } from 'express'
import { Clientes } from '../models/clientesModel.js'

export const getClientes = async (req, res = response) => {
  try {
    const clientes = await Clientes.findAll()

    return res.status(200).json({
      ok: true,
      data: [clientes],
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}

export const getCliente = async (req, res = response) => {
  try {
    const { id } = req.params

    const cliente = await Clientes.findOne({ where: { id } })

    if (cliente === null) {
      return res.status(404).json({
        ok: false,
        error: 'No se ha encontrado el artículo',
      })
    }

    return res.status(200).json({
      ok: true,
      data: cliente,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}

export const newCliente = async (req, res = response) => {
  try {
    const { email, nombre, direccion, poblacion, cpostal, password } = req.body
    const cliente = await Clientes.create({ email, nombre, direccion, poblacion, cpostal, password })

    return res.status(200).json({
      ok: true,
      data: cliente,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}

export const updateCliente = async (req, res = response) => {
  try {
    const { id } = req.params
    const cliente = await Clientes.findOne({ where: { id } })

    if (cliente === null) {
      return res.status(404).json({
        ok: false,
        error: 'No se ha encontrado el usuario',
      })
    }

    const { email, nombre, direccion, poblacion, cpostal, password } = req.body

    await cliente.update({ email, nombre, direccion, poblacion, cpostal, password })

    return res.status(200).json({
      ok: true,
      data: cliente,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}
