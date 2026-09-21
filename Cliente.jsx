function Cliente({ nome, email, telefone }) {
  return (
    <article className="cliente">
      <h3 className="cliente__nome">{nome}</h3>
      <p className="cliente__dado">
        <span className="cliente__rotulo">E-mail:</span> {email}
      </p>
      <p className="cliente__dado">
        <span className="cliente__rotulo">Telefone:</span> {telefone}
      </p>
    </article>
  )
}

export default Cliente
