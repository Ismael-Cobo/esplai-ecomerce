import express from 'express'
import { getArticulos, getArticulo, newArticulo } from '../controllers/articulosController.js'

export const router = express.Router()

router.get('/', getArticulos)
router.get('/:id', getArticulo)
router.post('/', newArticulo)
