import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";

import Select from 'react-select';

export function CreateReunion() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = [
        { value: 'Option1', label: 'Option 1' },
        { value: 'Option2', label: 'Option 2' },
        { value: 'Option3', label: 'Option 3' },
    ];

    const handleSelectChange = (selectedValues) => {
        setSelectedOptions(selectedValues || []);
    };

    const removeOption = (optionToRemove) => {
        const updatedOptions = selectedOptions.filter((option) => option !== optionToRemove);
        setSelectedOptions(updatedOptions);
    };

    const customMultiValue = (props) => (
        <div className="custom-multi-value" style={{ marginRight: '8px', cursor: 'pointer', 
        border: '1px solid', backgroundColor: 'var(--purple)', color: 'var(--white)', borderRadius: "10px", padding: "0.5rem" }}>
        {props.children}
        <span className="remove" onClick={() => removeOption(props.data)}>×</span>
        </div>
    );

    //salvar
    const [reunion, setReunion] = useState({});
    const [status, setStatus] = useState('');
    const club_id = 1;
    const user_id = 1;
  
    async function gravar(e) {
      e.preventDefault();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/reuniao/create',
          {
            titulo: reunion.titulo,
            descricao: reunion.descricao,
            link: reunion.link,
            data_reuniao: reunion.data_reuniao,
            hora_reuniao: reunion.hora_reuniao,
            livro: reunion.livro,
            autor: reunion.autor,
            club_id: reunion.club_id,
            user_id: reunion.user_id,
            
          },
          config
        );
  
        setStatus('Reunião cadastrada com sucesso!');
        alert('Reunião cadastrada com sucesso!');
        setReunion({});
      } catch (error) {
        setStatus(`Falha: ${error}`);
        alert(`Falha: ${error}`);
      }
    }

    return(
        <div className="container">
            <b style={{ fontSize: "1.5rem" }}>Criar reunião</b>

            <form className="mt-4" onSubmit={gravar} style={{ marginBottom: "3rem" }}>
                <div className="form-group mt-4">
                    <label>Título</label>
                    <input type="text" className="form-control" name="titulo" placeholder="Título" value={reunion.titulo || ''}
                            onChange={(e) => setReunion({ ...reunion, titulo: e.target.value })} required/>
                </div>
                
                <div className="form-group mt-4">
                    <label>Descrição</label>
                    <textarea 
                        className="form-control" 
                        name="descricao"
                        placeholder="Descrição" 
                        rows={4} 
                        maxLength={255}
                        style={{ resize: 'none' }}
                        value={reunion.descricao || ''}
                        onChange={(e) => setReunion({ ...reunion, descricao: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group mt-4">
                    <label>Link</label>
                    <input type="text" className="form-control" name="link" placeholder="Link" value={reunion.link || ''}
                            onChange={(e) => setReunion({ ...reunion, link: e.target.value })} required/>
                </div>

                <div className="form-group mt-4">
                    <div className="mt-2">
                        <p>Participantes:</p>
                    </div>
                
                    <Select
                        isMulti
                        options={options}
                        value={selectedOptions}
                        onChange={handleSelectChange}
                        components={{ MultiValue: customMultiValue }}
                        required
                    />              
                </div>

                <div className="row mt-4">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputData">Data</label>
                        <input type="date" className="form-control" id="inputHora" name="data_reuniao" placeholder="Data" value={reunion.data_reuniao || ''}
                                onChange={(e) => setReunion({ ...reunion, data_reuniao: e.target.value })}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputHora">Hora</label>
                        <input type="time" className="form-control" id="inputHora" name="hora_reuniao" placeholder="Hora" value={reunion.hora_reuniao || ''}
                                onChange={(e) => setReunion({ ...reunion, hora_reuniao: e.target.value })} required/>
                    </div>
                </div>   

                <div className="row mt-4">
                    <div className="form-group col-md-6">
                        <label>Livro</label>
                        <input type="text" className="form-control" name="livro" placeholder="Livro" value={reunion.livro || ''}
                                onChange={(e) => setReunion({ ...reunion, livro: e.target.value })}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Autor   </label>
                        <input type="text" className="form-control" name="autor" placeholder="autor" value={reunion.autor || ''}
                                onChange={(e) => setReunion({ ...reunion, autor: e.target.value })}/>
                    </div>
                </div>

                <div className="form-group mt-4">         
                    <button type="submit" className="btn mt-4" style={{ backgroundColor: "var(--purple)", color: "var(--white)" }}> Salvar </button>

                    <Link to={"/reunion"}>
                        <button type="button" className="btn mt-4" style={{ backgroundColor: 'var(--purple)', color: 'var(--white', marginLeft: "1rem" }}>
                            Voltar
                        </button>
                    </Link>
                </div>

            </form>
        </div>
    )
}