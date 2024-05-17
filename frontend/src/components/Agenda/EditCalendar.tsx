import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import { FormEvent } from '../types';

interface Calendario {
    titulo?: string;
    descricao?: string;
    data_evento?: string;
    hora_evento?: string;
    fim_evento?: string;
}

export function EditCalendar() {

    const [editCalendario, setEditCalendario] = useState<Calendario>({});
    const [, setStatus] = useState('');
    const [editSuccess, setEditSuccess] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        async function fetchCalendario() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/calendar/getById/${id}`);
                setEditCalendario(response.data[0]);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCalendario();
    }, [id]);

    async function gravar(e: FormEvent) {
        e.preventDefault();
        console.log("Dados a serem enviados:", { ...editCalendario });
        try {
            await axios.post(`http://127.0.0.1:8000/api/calendar/update/${id}`, {
                ...editCalendario,
            });
            setEditSuccess(true);
        } catch (error) {
            setStatus(`Falha: ${error}`);
        }
    }

    if (editSuccess) {
        navigate("/calendario");
    }

    return (
        <div className="container">
            <b>Editar Evento</b>
            <div className="mt-4">
                <form onSubmit={gravar}>
                    <div className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input 
                            type="text" 
                            id="titulo" 
                            className="form-control" 
                            placeholder="Título"
                            value={editCalendario?.titulo || ''} 
                            onChange={(e) => setEditCalendario({ ...editCalendario, titulo: e.target.value })} 
                        />
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="descricao">Descrição</label>
                        <input 
                            type="text" 
                            id="descricao" 
                            className="form-control" 
                            placeholder="Descrição"
                            value={editCalendario?.descricao || ''} 
                            onChange={(e) => setEditCalendario({ ...editCalendario, descricao: e.target.value })} 
                        />
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="data_evento">Data</label>
                        <input 
                            type="date" 
                            id="data_evento" 
                            className="form-control" 
                            placeholder="Data"
                            value={editCalendario?.data_evento || ''} 
                            onChange={(e) => setEditCalendario({ ...editCalendario, data_evento: e.target.value })} 
                        />
                    </div>
                    <div className="form-group mt-4">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="hora_evento">Começa</label>
                                <input 
                                    type="time" 
                                    id="hora_evento" 
                                    className="form-control"
                                    value={editCalendario?.hora_evento || ''} 
                                    onChange={(e) => setEditCalendario({ ...editCalendario, hora_evento: e.target.value })}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="fim_evento">Termina</label>
                                <input 
                                    type="time" 
                                    id="fim_evento" 
                                    className="form-control" 
                                    value={editCalendario?.fim_evento || ''} 
                                    onChange={(e) => setEditCalendario({ ...editCalendario, fim_evento: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
    
                    <div className="form-group">         
                        <button type="submit"> Salvar </button>
                        <Link to={"/calendario"}> 
                            <button type="button" className="mt-4"> Voltar </button> 
                        </Link>
                    </div>
    
                </form>
            </div>
        </div>
    )
}    
