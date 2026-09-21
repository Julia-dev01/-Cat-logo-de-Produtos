function FormularioCliente({ valores, onChange, onSubmit, enviando }) {
  return (
    <form className="formulario" onSubmit={onSubmit}>
      <h2 className="formulario__titulo">Cadastrar cliente</h2>

      <label className="campo">
        <span className="campo__rotulo">Nome</span>
        <input
          className="campo__entrada"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={onChange}
          placeholder="Ex.: Maria Silva"
          required
        />
      </label>

      <label className="campo">
        <span className="campo__rotulo">E-mail</span>
        <input
          className="campo__entrada"
          type="email"
          name="email"
          value={valores.email}
          onChange={onChange}
          placeholder="Ex.: maria@email.com"
          required
        />
      </label>

      <label className="campo">
        <span className="campo__rotulo">Telefone</span>
        <input
          className="campo__entrada"
          type="tel"
          name="telefone"
          value={valores.telefone}
          onChange={onChange}
          placeholder="Ex.: (11) 98888-7777"
          required
        />
      </label>

      <button className="botao" type="submit" disabled={enviando}>
        {enviando ? 'Cadastrando...' : 'Cadastrar cliente'}
      </button>
    </form>
  )
}

export default FormularioCliente
