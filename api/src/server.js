import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('✅ API AgroSim funcionando'))

const PORT = process.env.PORT || 5000
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('📦 Conexión a MongoDB exitosa')
    app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`))
  })
  .catch(err => console.error('❌ Error en conexión:', err))

export default app