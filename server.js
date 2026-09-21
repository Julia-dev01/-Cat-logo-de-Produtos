import express from 'express'
import cors from 'cors'
import { inserirCliente, listarClientes } from './database.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const rotasClientes = express.Router()

rotasClientes.get('/clientes', (req, res) => {
  res.json(listarClientes())
})

rotasClientes.post('/clientes', (req, res) => {
  const { nome, email, telefone } = req.body ?? {}

  if (!nome || !email || !telefone) {
    return res.status(400).json({ erro: 'Informe nome, e-mail e telefone.' })
  }

  const cliente = inserirCliente({
    nome: String(nome).trim(),
    email: String(email).trim(),
    telefone: String(telefone).trim(),
  })

  res.status(201).json(cliente)
})

app.use(rotasClientes)
app.use('/api', rotasClientes)

app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada.' })
})

app.listen(PORT, () => {
  console.log(`API de clientes disponível em http://localhost:${PORT}`)
  console.log(`Rotas: GET /clientes | POST /clientes`)
})
