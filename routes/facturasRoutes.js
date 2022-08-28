import express from 'express'
import {
  getFacturas,
  getFactura,
  newFactura,
  updateFactura,
  deleteFacturas,
  getAllFacturasByClientId,
} from '../controllers/facturasController.js'

export const router = express.Router()

router.get('/', getFacturas)
router.get('/:id', getFactura)
router.get('/cliente/:id', getAllFacturasByClientId)
router.post('/', newFactura)
router.put('/:id', updateFactura)
router.delete('/:id', deleteFacturas)
