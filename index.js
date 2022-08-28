import express from 'express'
import cors from 'cors'
import { router as articulosRoutes } from './routes/articulosRoutes.js'
import { router as clientesRoutes } from './routes/clientesRoute.js'
import { router as facturasRoutes } from './routes/facturasRoutes.js'
import { router as lineasRoutes } from './routes/lineasRoutes.js'

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api/articulos', articulosRoutes)
app.use('/api/clientes', clientesRoutes)
app.use('/api/facturas', facturasRoutes)
app.use('/api/lineas', lineasRoutes)

app.listen(4000, () => {
  console.log(`Servidor corriendo el el puerto ${4000}`)
})
