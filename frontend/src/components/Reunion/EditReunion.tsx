import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";

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
    
    //edit
    //const { id } = useParams();
    /*const [editveiculos, setEditVeiculos] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        async function Veiculos() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/reuniao/getAllReuniaoByClub/1`);
                setEditVeiculos(response.data);
                //setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        Veiculos();
    }, []);

    async function gravar(e) {
        e.preventDefault(); // cancela o submit
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/veiculos/${id}`, editveiculos);
            setStatus("Reunião Atualizada");
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }     
    }*/       

    return (
        <div className="container">
            <b style={{ fontSize: "1.5rem" }}>Editar reunião</b>

            {reunions.map((reunion) => (
                <form className="mt-4" style={{ marginBottom: "3rem" }}>
                
                    <div key={reunion.id} className="form-group mt-4">
                        <label>Título</label>
                        <input type="text" className="form-control" placeholder="Título" value={reunion.titulo} required/>
                    </div>

                    <div className="form-group mt-4">
                        <label>Descrição</label>
                        <textarea 
                            className="form-control" 
                            placeholder="Descrição" 
                            rows={4} 
                            maxLength={255}
                            style={{ resize: 'none' }}
                            value={reunion.descricao}
                            required
                        />
                    </div>

                    <div className="form-group mt-4">
                        <label>Link</label>
                        <input type="text" className="form-control" placeholder="Link" value={reunion.link} required/>
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
                            <input type="date" className="form-control" id="inputHora" placeholder="Data" value={reunion.data_reuniao} required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputHora">Hora</label>
                            <input type="time" className="form-control" id="inputHora" placeholder="Hora" value={reunion.hora_reuniao} required/>
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
                            value={" "}
                            required
                        />
                    </div>    

                    <div className="row mt-4">
                        <div className="form-group col-md-6">
                            <label>Livro</label>
                            <input type="text" className="form-control" placeholder="Livro" value={reunion.livro} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Autor</label>
                            <input type="text" className="form-control" placeholder="Autor" value={reunion.autor} />
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
            ))}
        </div>
        
    )
}