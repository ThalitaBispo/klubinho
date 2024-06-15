import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import { FormEvent } from '../types';

interface Reunion {
    titulo?: string;
    descricao?: string;
    link?: string;
    data_reuniao?: string;
    hora_reuniao?: string;
    livro?: string;
    autor?: string;
}

export function EditReunion() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const [editReuniao, setEditReuniao] = useState<Reunion>({});
    const [, setStatus] = useState('');

    useEffect(() => {
        async function fetchReuniao() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/reuniao/getReuniao/${id}`);
                setEditReuniao(response.data.reuniao);
            } catch (error) {
                console.error(error);
            }
        }
        fetchReuniao();
    }, [id]);

    async function gravar(e: FormEvent) {
        e.preventDefault();
        console.log("Dados a serem enviados:", { ...editReuniao });
        try {
            await axios.post(`http://127.0.0.1:8000/api/reuniao/edt/${id}`, {
                ...editReuniao,
            });
            navigate(-1); // Navega de volta para a página anterior
        } catch (error) {
            setStatus(`Falha: ${error}`);
        }
    }

    return (
        <div className="container">
            <b>Editar reunião</b>

            <form onSubmit={gravar} className="mt-4">
                <div className="form-group mt-4">
                    <label>Título</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Título" 
                        value={editReuniao.titulo || ''} 
                        onChange={(e) => setEditReuniao({ ...editReuniao, titulo: e.target.value })}
                        maxLength={60}
                        required 
                    />
                </div>

                <div className="form-group mt-4">
                    <label>Descrição</label>
                    <textarea
                        className="form-control"
                        placeholder="Descrição"
                        rows={4}
                        maxLength={255}
                        style={{ resize: 'none' }}
                        value={editReuniao.descricao || ''}
                        onChange={(e) => setEditReuniao({ ...editReuniao, descricao: e.target.value })}
                    />
                </div>

                <div className="form-group mt-4">
                    <label>Link</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Link" 
                        value={editReuniao.link || ''} 
                        onChange={(e) => setEditReuniao({ ...editReuniao, link: e.target.value })} 
                    />
                </div>

                <div className="row mt-4">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputData">Data</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="inputHora" 
                            placeholder="Data" 
                            value={editReuniao.data_reuniao || ''} 
                            onChange={(e) => setEditReuniao({ ...editReuniao, data_reuniao: e.target.value })} 
                            required 
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputHora">Hora</label>
                        <input 
                            type="time" 
                            className="form-control" 
                            id="inputHora" 
                            placeholder="Hora" 
                            value={editReuniao.hora_reuniao || ''} 
                            onChange={(e) => setEditReuniao({ ...editReuniao, hora_reuniao: e.target.value })} 
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
                            value={editReuniao.livro || ''} 
                            onChange={(e) => setEditReuniao({ ...editReuniao, livro: e.target.value })}
                            placeholder="Livro" 
                            maxLength={60}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Autor</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={editReuniao.autor|| ''} 
                            onChange={(e) => setEditReuniao({ ...editReuniao, autor: e.target.value })}
                            placeholder="Autor" 
                            maxLength={60}
                        />
                    </div>
                </div>

                <div className="form-group mt-4">
                    <button type="submit" className="mt-4"> 
                        Salvar 
                    </button>
                    <button type="button" onClick={() => navigate(-1)} className="mt-4">
                        Voltar
                    </button>
                </div>
            </form>
        </div>
    );
}
