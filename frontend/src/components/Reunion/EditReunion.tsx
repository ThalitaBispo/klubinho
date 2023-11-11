import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import Select from 'react-select';

export function EditReunion() {
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

    return (
        <div className="container">
            <b style={{ fontSize: "1.5rem" }}>Editar reunião</b>

            <form className="mt-4" style={{ marginBottom: "3rem" }}>
                <div className="form-group mt-4">
                    <label>Título</label>
                    <input type="text" className="form-control" placeholder="Título" value={""} required/>
                </div>

                <div className="form-group mt-4">
                    <label>Descrição</label>
                    <textarea 
                        className="form-control" 
                        placeholder="Descrição" 
                        rows={4} 
                        maxLength={255}
                        style={{ resize: 'none' }}
                        required
                    />
                </div>

                <div className="form-group mt-4">
                    <label>Link</label>
                    <input type="text" className="form-control" placeholder="Link" value={""} required/>
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
                        <input type="date" className="form-control" id="inputHora" placeholder="Data" required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputHora">Hora</label>
                        <input type="time" className="form-control" id="inputHora" placeholder="Hora" required/>
                    </div>
                </div>

                <div className="form-group mt-4 mb-4">
                    <label>Comentário</label>
                    <textarea 
                        className="form-control" 
                        placeholder="Comentário" 
                        rows={4} 
                        maxLength={255}
                        style={{ resize: 'none' }}
                        required
                    />
                </div>    

                <b className="mt-4 mb-4" style={{ fontSize: "1.5rem" }}>Livro</b>

                <div className="form-group mt-4">
                    <label>Título</label>
                    <input type="text" className="form-control" placeholder="Título" value={""} />
                </div>

                <div className="row mt-4">
                    <div className="form-group col-md-6">
                        <label>Autor</label>
                        <input type="text" className="form-control" placeholder="Autor" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Genêro</label>
                        <input type="text" className="form-control" placeholder="Genêro"/>
                    </div>
                </div>

                <div className="form-group mt-4">
                    <label>Curadoria</label>
                    <select className="form-control">
                        <option selected>Escolher ...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

                <div className="form-group mt-4">
                    <label>Descrição</label>
                    <textarea 
                        className="form-control" 
                        placeholder="Descrição" 
                        rows={4} 
                        maxLength={255}
                        style={{ resize: 'none' }}
                    />
                </div>

                <div className="row mt-4">
                    <div className="form-group col-md-6">
                        <label>Número de páginas</label>
                        <input type="number" className="form-control" placeholder="000" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Preço</label>
                        <input type="price" className="form-control" placeholder="R$ 00,00" />
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="form-group col-md-6">
                        <label>Mês de referência</label>
                        <input type="text" className="form-control" placeholder="Mês" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Status</label>
                        <select className="form-control">
                            <option selected>Escolher ...</option>
                            <option>Lido</option>
                            <option>Leitura atual</option>
                            <option>Em breve</option>
                            <option>Em votação</option>
                        </select>
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