import express from 'express'
import { deleteCliente, getCliente, getClientes, newCliente, updateCliente } from '../controllers/clientesController.js'

export const router = express.Router()

router.get('/', getClientes)
router.get('/:id', getCliente)
router.post('/', newCliente)
router.put('/:id', updateCliente)
router.delete('/:id', deleteCliente)
