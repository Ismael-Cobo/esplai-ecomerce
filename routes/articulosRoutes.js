import express from 'express'
import {
  getArticulos,
  getArticulo,
  newArticulo,
  updateArticulo,
  deleteArticulo,
} from '../controllers/articulosController.js'

export const router = express.Router()

router.get('/', getArticulos)
router.get('/:id', getArticulo)
router.post('/', newArticulo)
router.put('/:id', updateArticulo)
router.delete('/:id', deleteArticulo)
