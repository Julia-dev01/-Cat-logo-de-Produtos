-- Banco de dados do projeto Catalogo de Produtos
-- Arquivo gerado automaticamente pelo backend em database/clientes.db

CREATE TABLE IF NOT EXISTS clientes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  criado_em TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Consultas utilizadas pela API
-- GET  /clientes -> SELECT id, nome, email, telefone, criado_em FROM clientes ORDER BY id DESC
-- POST /clientes -> INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)
