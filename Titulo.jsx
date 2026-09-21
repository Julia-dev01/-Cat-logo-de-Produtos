function Titulo({ nome, descricao }) {
  return (
    <header className="titulo">
      <h1 className="titulo__nome">{nome}</h1>
      <p className="titulo__descricao">{descricao}</p>
    </header>
  )
}

export default Titulo
