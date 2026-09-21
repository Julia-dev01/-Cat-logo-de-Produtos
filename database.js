import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Database from 'better-sqlite3'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pastaBanco = path.join(__dirname, '..', 'database')

if (!fs.existsSync(pastaBanco)) {
  fs.mkdirSync(pastaBanco, { recursive: true })
}

const caminhoBanco = path.join(pastaBanco, 'clientes.db')

export const db = new Database(caminhoBanco)

db.exec(`
  CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone TEXT NOT NULL,
    criado_em TEXT NOT NULL DEFAULT (datetime('now'))
  )
`)

const stmtListar = db.prepare(
  'SELECT id, nome, email, telefone, criado_em FROM clientes ORDER BY id DESC',
)
const stmtBuscarPorId = db.prepare(
  'SELECT id, nome, email, telefone, criado_em FROM clientes WHERE id = ?',
)
const stmtInserir = db.prepare(
  'INSERT INTO clientes (nome, email, telefone) VALUES (@nome, @email, @telefone)',
)

export function listarClientes() {
  return stmtListar.all()
}

export function inserirCliente({ nome, email, telefone }) {
  const resultado = stmtInserir.run({ nome, email, telefone })
  return stmtBuscarPorId.get(resultado.lastInsertRowid)
}
