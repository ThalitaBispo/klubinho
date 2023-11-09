import React, { useState } from "react";

export function CreateEnquete() {
  const [additionalInputs, setAdditionalInputs] = useState([]);
  const [showRemoveButton, setShowRemoveButton] = useState(false);

  const handleAddInputs = () => {
    const newInput = { id: Date.now() };
    setAdditionalInputs([...additionalInputs, newInput]);
    setShowRemoveButton(true);
  };

  const handleRemoveLastInputs = () => {
    const updatedInputs = [...additionalInputs];
    updatedInputs.splice(-1); // Remove os dois últimos blocos adicionados
    setAdditionalInputs(updatedInputs);
    if (updatedInputs.length === 0) {
      setShowRemoveButton(false);
    }
  };

  return (
    <div className="container">
      <span style={{ fontSize: "1.5rem" }}>Criar enquete</span>

      <form className="mt-4" style={{ marginBottom: "3rem" }}>
        <div className="form-group mt-4">
          <label>Título</label>
          <input type="text" className="form-control" placeholder="Título" value={"Livro da semana"}/>
        </div>

        <div className="form-group mt-4 mb-4">
          <label>Descrição</label>
          <input type="text" className="form-control" placeholder="Descrição" value={""}/>
        </div>

        <span style={{ fontSize: "1.25rem" }}>Opções da enquete</span>

        <div className="form-group mt-4">
          <label>Título</label>
          <input type="text" className="form-control" placeholder="Título" value={""}/>
        </div>

        <div className="form-group mt-4">
          <label>Descrição</label>
          <input type="text" className="form-control" placeholder="Descrição" value={""}/>
        </div>

        <div className={`col-md-4`} style={{ backgroundColor: 'var(--purple)', borderRadius: '5px', color: '#fff', cursor: 'pointer', marginTop: '1rem',
          padding: '0.25rem 1rem' }}>
            <label htmlFor="selecao-arquivo">Selecione uma imagem</label>
            <input id='selecao-arquivo' style={{ display: 'none' }} type='file' />
        </div>

        {additionalInputs.map((input, index) => (
          <div key={input.id} className="form-group mt-4">
            <label htmlFor={`input${input.id}`}>Título</label>
            <input type="text" className="form-control" id={`input${input.id}`} name={`input${input.id}`} placeholder="Título" value={""}/>
            
            <label htmlFor={`input${input.id + 1}`} className="form-group mt-4">Descrição</label>
            <input type="text" className="form-control" id={`input${input.id + 1}`} name={`input${input.id + 1}`} placeholder="Descrição" value={""}/>
            
            <div className={`col-md-4`} style={{ backgroundColor: 'var(--purple)', borderRadius: '5px', color: '#fff', cursor: 'pointer', marginTop: '1rem',
          padding: '0.25rem 1rem' }}>
            <label htmlFor="selecao-arquivo">Selecione uma imagem</label>
            <input id='selecao-arquivo' style={{ display: 'none' }} type='file' />
        </div>
          
          </div>
        ))}

        <button type="button" className="btn mt-4" style={{ backgroundColor: "var(--purple)", color: "var(--white)", marginRight: '1rem' }}
          onClick={handleAddInputs}> Adicionar opção </button>

        {showRemoveButton && (
          <button type="button" className="btn btn-danger mt-4" onClick={handleRemoveLastInputs} style={{ marginRight: '1rem' }}> Remover opção </button>
        )}

        <button type="submit" className="btn mt-4" style={{ backgroundColor: "var(--purple)", color: "var(--white)" }}> Salvar </button>
      </form>
    </div>
  );
}
