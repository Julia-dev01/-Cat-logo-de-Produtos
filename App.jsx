import { useEffect, useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'
import Produto from './components/Produto'
import FormularioProduto from './components/FormularioProduto'
import Cliente from './components/Cliente'
import FormularioCliente from './components/FormularioCliente'
import { buscarClientes, criarCliente } from './services/clientesApi'

const PRODUTOS_INICIAIS = [
  { id: 1, nome: 'Notebook', categoria: 'Informática', preco: 3500 },
  { id: 2, nome: 'Cadeira Gamer', categoria: 'Móveis', preco: 1200 },
  { id: 3, nome: 'Mouse sem fio', categoria: 'Periféricos', preco: 149.9 },
]

const PRODUTO_VAZIO = { nome: '', categoria: '', preco: '' }
const CLIENTE_VAZIO = { nome: '', email: '', telefone: '' }

function App() {
  const [produtos, setProdutos] = useState(PRODUTOS_INICIAIS)
  const [novoProduto, setNovoProduto] = useState(PRODUTO_VAZIO)

  const [clientes, setClientes] = useState([])
  const [novoCliente, setNovoCliente] = useState(CLIENTE_VAZIO)

  const [carregandoClientes, setCarregandoClientes] = useState(true)
  const [enviandoCliente, setEnviandoCliente] = useState(false)
  const [mensagem, setMensagem] = useState('')

  useEffect(() => {
    let ativo = true

    async function carregarClientes() {
      try {
        const dados = await buscarClientes()
        if (ativo) setClientes(dados)
      } catch (erro) {
        if (ativo) setMensagem(erro.message)
      } finally {
        if (ativo) setCarregandoClientes(false)
      }
    }

    carregarClientes()

    return () => {
      ativo = false
    }
  }, [])

  function alterarProduto(evento) {
    const { name, value } = evento.target
    setNovoProduto((anterior) => ({ ...anterior, [name]: value }))
  }

  function adicionarProduto(evento) {
    evento.preventDefault()

    const produto = {
      id: Date.now(),
      nome: novoProduto.nome.trim(),
      categoria: novoProduto.categoria.trim(),
      preco: Number(novoProduto.preco),
    }

    setProdutos((anterior) => [...anterior, produto])
    setNovoProduto(PRODUTO_VAZIO)
  }

  function alterarCliente(evento) {
    const { name, value } = evento.target
    setNovoCliente((anterior) => ({ ...anterior, [name]: value }))
  }

  async function cadastrarCliente(evento) {
    evento.preventDefault()
    setEnviandoCliente(true)
    setMensagem('')

    try {
      const clienteSalvo = await criarCliente({
        nome: novoCliente.nome.trim(),
        email: novoCliente.email.trim(),
        telefone: novoCliente.telefone.trim(),
      })

      setClientes((anterior) => [clienteSalvo, ...anterior])
      setNovoCliente(CLIENTE_VAZIO)
      setMensagem('Cliente cadastrado com sucesso!')
    } catch (erro) {
      setMensagem(erro.message)
    } finally {
      setEnviandoCliente(false)
    }
  }

  return (
    <div className="app">
      <Titulo
        nome="Catálogo de Produtos e Clientes"
        descricao="Visualize os produtos disponíveis e cadastre novos clientes em poucos cliques."
      />

      <main className="conteudo">
        <section className="secao">
          <h2 className="secao__titulo">Produtos disponíveis</h2>

          <FormularioProduto
            valores={novoProduto}
            onChange={alterarProduto}
            onSubmit={adicionarProduto}
          />

          <div className="lista">
            {produtos.map((produto) => (
              <Produto
                key={produto.id}
                nome={produto.nome}
                categoria={produto.categoria}
                preco={produto.preco}
              />
            ))}
          </div>
        </section>

        <section className="secao">
          <h2 className="secao__titulo">Clientes cadastrados</h2>

          <FormularioCliente
            valores={novoCliente}
            onChange={alterarCliente}
            onSubmit={cadastrarCliente}
            enviando={enviandoCliente}
          />

          {mensagem && <p className="aviso">{mensagem}</p>}

          {carregandoClientes ? (
            <p className="aviso">Carregando clientes...</p>
          ) : clientes.length === 0 ? (
            <p className="aviso">Nenhum cliente cadastrado até o momento.</p>
          ) : (
            <div className="lista">
              {clientes.map((cliente) => (
                <Cliente
                  key={cliente.id}
                  nome={cliente.nome}
                  email={cliente.email}
                  telefone={cliente.telefone}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
