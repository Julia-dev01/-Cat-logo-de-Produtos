function FormularioProduto({ valores, onChange, onSubmit }) {
  return (
    <form className="formulario" onSubmit={onSubmit}>
      <h2 className="formulario__titulo">Adicionar produto</h2>

      <label className="campo">
        <span className="campo__rotulo">Nome</span>
        <input
          className="campo__entrada"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={onChange}
          placeholder="Ex.: Monitor 27 polegadas"
          required
        />
      </label>

      <label className="campo">
        <span className="campo__rotulo">Categoria</span>
        <input
          className="campo__entrada"
          type="text"
          name="categoria"
          value={valores.categoria}
          onChange={onChange}
          placeholder="Ex.: Periféricos"
          required
        />
      </label>

      <label className="campo">
        <span className="campo__rotulo">Preço (R$)</span>
        <input
          className="campo__entrada"
          type="number"
          name="preco"
          value={valores.preco}
          onChange={onChange}
          placeholder="0,00"
          min="0"
          step="0.01"
          required
        />
      </label>

      <button className="botao" type="submit">
        Adicionar produto
      </button>
    </form>
  )
}

export default FormularioProduto
