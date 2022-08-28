import { response } from 'express'
import { Articulos, Articulos_Facturas, Facturas } from '../models/index.js'

export const getLineas = async (req, res = response) => {
  try {
    const lineas = await Articulos_Facturas.findAll({ include: [{ model: Facturas }, { model: Articulos }] })

    return res.status(200).json({
      ok: true,
      data: lineas,
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      ok: false,
      error: e.message,
    })
  }
}
