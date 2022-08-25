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
      ok: false,
      error: message,
    })
  }
}

export const getArticulo = async (req, res = response) => {
  try {
    const { id } = req.params

    const articulo = await Articulos.findOne({ where: { id } })

    if (articulo === null) {
      return res.status(404).json({
        ok: false,
        error: 'No se ha encontrado el artículo',
      })
    }

    return res.status(200).json({
      ok: true,
      data: articulo,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}

export const newArticulo = async (req, res = response) => {
  try {
    const { nombre, descripcion, precio, estoc } = req.body
    const articulo = await Articulos.create({ nombre, descripcion, precio, estoc })

    return res.status(200).json({
      ok: true,
      data: articulo,
    })
  } catch ({ message }) {
    return res.status(500).json({
      ok: false,
      error: message,
    })
  }
}
