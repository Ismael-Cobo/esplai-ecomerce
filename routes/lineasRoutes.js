import express from 'express'
import { getLineas } from '../controllers/lineasController.js'

export const router = express.Router()

router.get('/', getLineas)
