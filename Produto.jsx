function Produto({ nome, categoria, preco }) {
  const precoFormatado = Number(preco).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <article className="produto">
      <h3 className="produto__nome">{nome}</h3>
      <span className="produto__categoria">{categoria}</span>
      <strong className="produto__preco">{precoFormatado}</strong>
    </article>
  )
}

export default Produto
