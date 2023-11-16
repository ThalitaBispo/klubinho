import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';

import Select from 'react-select';

export function EditReunion() {
    
   //visualizar participantes
   const [integrantes, setIntegrantes] = useState([]);
   const [loading, setLoading] = useState(true);
   const club_id = Cookies.get('club_id');

   useEffect(() => {
       async function Profile() {
         try {
           const response = await axios.get(`http://127.0.0.1:8000/api/clubIntegrantes/getClubIntegrantesWithUser/${club_id}`);
           setIntegrantes(response.data);
           setLoading(false);
         } catch (error) {
           console.error(error);
         }
       }
   
       Profile();
     }, []);

   //select
   const [selectedOptions, setSelectedOptions] = useState([]);
   const options = integrantes.map((integrante) => ({
       value: `${integrante.name} ${integrante.last_name}`,
       label: `${integrante.name} ${integrante.last_name}`,
     }));

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

   //get
   const { id } = useParams();
    const [editReuniao, setEditReuniao] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        async function EditReuniao() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/reuniao/getReuniao/${id}`);
                setEditReuniao(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        EditReuniao();
    }, []);

    return (
        <div className="container">
            <b style={{ fontSize: "1.5rem" }}>Editar reunião</b>

            
                <form className="mt-4" style={{ marginBottom: "3rem" }}>
                
                    <div className="form-group mt-4">
                        <label>Título</label>
                        <input type="text" className="form-control" placeholder="Título" value={editReuniao.titulo || ''} required/>
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
                        <input type="text" className="form-control" placeholder="Link" required/>
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
                            value={" "}
                            required
                        />
                    </div>    

                    <div className="row mt-4">
                        <div className="form-group col-md-6">
                            <label>Livro</label>
                            <input type="text" className="form-control" placeholder="Livro" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Autor</label>
                            <input type="text" className="form-control" placeholder="Autor" />
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