import express from 'express'
import { getCliente, getClientes, newCliente } from '../controllers/clientesController.js'

export const router = express.Router()

router.get('/', getClientes)
router.get('/:id', getCliente)
router.post('/', newCliente)
router.put('/:id')
router.delete('/:id')
