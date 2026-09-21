const BASE_URL = '/api/clientes'

export async function buscarClientes() {
  const resposta = await fetch(BASE_URL)

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os clientes.')
  }

  return resposta.json()
}

export async function criarCliente(cliente) {
  const resposta = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cliente),
  })

  const dados = await resposta.json()

  if (!resposta.ok) {
    throw new Error(dados.erro || 'Não foi possível cadastrar o cliente.')
  }

  return dados
}
