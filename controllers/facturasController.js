import { response } from 'express'

import { Facturas, Clientes } from '../models/index.js'

export const getFacturas = async (req, res = response) => {
  try {
    const facturas = await Facturas.findAll({ include: { model: Clientes } })

    return res.status(200).json({
      ok: true,
      data: facturas,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}

export const getFactura = async (req, res = response) => {
  try {
    const { id } = req.params
    const factura = await Facturas.findAll({ include: { model: Clientes }, where: { id } })
    console.log(factura)
    if (factura.length < 1) {
      return res.status(404).json({
        ok: false,
        error: 'No se ha encontrado la factura',
      })
    }

    return res.status(200).json({
      ok: true,
      data: factura,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}

export const newFactura = async (req, res = response) => {
  try {
    const { numero, fecha, direccion, poblacion, cpostal, nombre, ClienteId } = req.body

    const cliente = await Clientes.findOne({ where: { id: ClienteId } })

    if (cliente === null) {
      return res.status(404).json({
        ok: false,
        error: 'No se ha encontrado al usuario',
      })
    }

    const factura = await Facturas.create({ numero, fecha, direccion, poblacion, cpostal, nombre, ClienteId })

    return res.status(200).json({
      ok: true,
      data: factura,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}

export const updateFactura = async (req, res = response) => {
  try {
    const { id: idFactura } = req.params

    const factura = await Facturas.findOne({ where: { id: idFactura } })

    if (factura === null) {
      return res.status(404).json({
        ok: false,
        error: 'No se ha encontrado la factura',
      })
    }

    const { numero, fecha, direccion, poblacion, cpostal, nombre, ClienteId } = req.body

    const cliente = await Clientes.findOne({ where: { id: ClienteId } })

    if (cliente === null) {
      return res.status(404).json({
        ok: false,
        error: 'No se ha encontrado al usuario',
      })
    }

    await factura.update({ numero, fecha, direccion, poblacion, cpostal, nombre, ClienteId })

    return res.status(200).json({
      ok: true,
      data: factura,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}

export const deleteFacturas = async (req, res = response) => {
  try {
    const { id } = req.params

    const factura = await Facturas.findOne({ where: { id } })

    if (factura === null) {
      return res.status(404).json({
        ok: false,
        error: 'No se ha encontrado la factura',
      })
    }

    await factura.destroy({ where: { id } })

    return res.status(200).json({
      ok: true,
      data: factura,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}
