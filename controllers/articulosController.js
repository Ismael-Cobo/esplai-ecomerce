import { response } from 'express'
import { Articulos } from '../models/articulosModel.js'

export const getArticulos = async (req, res = response) => {
  try {
    const articulos = await Articulos.findAll()

    return res.status(200).json({
      ok: true,
      data: [articulos],
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: true,
      error: message,
    })
  }
}

export const getArticulo = async (req, res = response) => {
  try {
    const { id } = req.body
    const articulo = await Articulos.findOne({ where: { id } })

    return res.status(200).json({
      ok: true,
      data: articulo,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: true,
      error: message,
    })
  }
}
