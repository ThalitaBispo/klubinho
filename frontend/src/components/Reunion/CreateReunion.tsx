import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { FormEvent, OptionType, CustomMultiValueProps } from '../types';

import styles from './Reunion.module.css';

import Select, { MultiValue } from 'react-select';

interface Integrante {
  name: string;
  last_name: string;
}

interface Reunion {
  titulo?: string;
  descricao?: string;
  link?: string;
  data_reuniao?: string;
  hora_reuniao?: string;
  livro?: string;
  autor?: string;
}

export function CreateReunion() {
    //salvar
    const [reunion, setReunion] = useState<Reunion>({});
    const [status, setStatus] = useState<string>('');
    
    const user_id = Cookies.get('user_id');
    const club_id = Cookies.get('club_id');

    const [integrantes, setIntegrantes] = useState<Integrante[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
  
    async function gravar(e: FormEvent) {
      e.preventDefault();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      try {
        const participantsArray = selectedOptions.map(option => option.value); // Extrai os valores dos participantes
        await axios.post(
          'http://127.0.0.1:8000/api/reuniao/create',
          {
            titulo: reunion.titulo,
            descricao: reunion.descricao,
            link: reunion.link,
            data_reuniao: reunion.data_reuniao,
            hora_reuniao: reunion.hora_reuniao,
            livro: reunion.livro,
            autor: reunion.autor,
            club_id: club_id,
            user_id: user_id,
            participants: participantsArray,
            
          },
          config
        );
  
        setStatus('Reunião cadastrada com sucesso!');
        alert('Reunião cadastrada com sucesso!');
        setReunion({});
        setSelectedOptions([]);
      } catch (error) {
        setStatus(`Falha: ${error}`);
        alert(`Falha: ${error}`);
        console.log(error);
      }
    }

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
      }, [club_id]);

    //select    
    const options = integrantes.map((integrante) => ({
        value: `${integrante.name} ${integrante.last_name}`,
        label: `${integrante.name} ${integrante.last_name}`,
      }));

    const handleSelectChange = (selectedValues: MultiValue<OptionType>) => {
      setSelectedOptions([...selectedValues] || []);
    };

    const removeOption = (optionToRemove: OptionType) => {
        const updatedOptions = selectedOptions.filter((option) => option !== optionToRemove);
        setSelectedOptions(updatedOptions);
    };

    const customMultiValue = (props: CustomMultiValueProps) => (
        <div className={`custom-multi-value ${styles.multiValue}`}>
          {props.children}
          <span className="remove" onClick={() => removeOption(props.data)}>×</span>
        </div>
    );

    return(
        <div className="container">
            <b>Criar reunião</b>

            <form className="mt-4" onSubmit={gravar}>
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
                    <input 
                      type="text" 
                      className="form-control" 
                      name="link" 
                      placeholder="Link" 
                      value={reunion.link || ''}
                      onChange={(e) => setReunion({ ...reunion, link: e.target.value })} 
                      required
                    />
                </div>

                <div className="form-group mt-4">
                    <div className="mt-2">
                        <p>Participantes:</p>
                    </div>
                
                    <Select
                        isMulti
                        options={options}
                        value={selectedOptions}
                        name="participants_name"
                        onChange={handleSelectChange}
                        components={{ MultiValue: customMultiValue }}
                        required
                    />              
                </div>

                <div className="row mt-4">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputData">Data</label>
                        <input 
                          type="date" 
                          className="form-control" 
                          id="inputHora" 
                          name="data_reuniao" 
                          placeholder="Data" 
                          value={reunion.data_reuniao || ''}
                          onChange={(e) => setReunion({ ...reunion, data_reuniao: e.target.value })}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputHora">Hora</label>
                        <input 
                          type="time" 
                          className="form-control" 
                          id="inputHora" 
                          name="hora_reuniao" 
                          placeholder="Hora" 
                          value={reunion.hora_reuniao || ''}
                          onChange={(e) => setReunion({ ...reunion, hora_reuniao: e.target.value })} 
                          required
                        />
                    </div>
                </div>   

                <div className="row mt-4">
                    <div className="form-group col-md-6">
                        <label>Livro</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="livro" 
                          placeholder="Livro" 
                          value={reunion.livro || ''}
                          onChange={(e) => setReunion({ ...reunion, livro: e.target.value })}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Autor   </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="autor" 
                          placeholder="autor" 
                          value={reunion.autor || ''}
                          onChange={(e) => setReunion({ ...reunion, autor: e.target.value })}
                        />
                    </div>
                </div>

                <div className="form-group mt-4">         
                    <button type="submit" className="mt-2"> 
                      Salvar 
                    </button>

                    <Link to={"/reunion"}>
                        <button type="button" className="mt-4">
                            Voltar
                        </button>
                    </Link>
                </div>

            </form>
        </div>
    )
}