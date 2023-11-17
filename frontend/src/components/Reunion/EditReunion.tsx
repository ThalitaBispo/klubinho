import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';

export function EditReunion() {
    // Get
    const { id } = useParams();
    const [editReuniao, setEditReuniao] = useState({});
    const [status, setStatus] = useState('');

    useEffect(() => {
        async function EditReuniao() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/reuniao/getReuniao/${id}`);
                setEditReuniao(response.data.reuniao);
            } catch (error) {
                console.error(error);
            }
        }
        EditReuniao();
    }, []);

    //update
    async function gravar(e) {
        e.preventDefault(); // cancela o submit
        console.log("Dados a serem enviados:", { ...editReuniao });
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/reuniao/edit/${id}`, {
                ...editReuniao,
            });
            setStatus("Reunião Atualizada");
            alert("Reunião atualizada");
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }


    return (
        <div className="container">
            <b style={{ fontSize: "1.5rem" }}>Editar reunião</b>

            <form onSubmit={gravar} className="mt-4" style={{ marginBottom: "3rem" }}>
                <div className="form-group mt-4">
                    <label>Título</label>
                    <input type="text" className="form-control" placeholder="Título" value={editReuniao.titulo || ''} 
                    onChange={(e) => setEditReuniao({ ...editReuniao, titulo: e.target.value })} required />
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
                        required
                    />
                </div>

                <div className="form-group mt-4">
                    <label>Link</label>
                    <input type="text" className="form-control" placeholder="Link" value={editReuniao.link || ''} 
                    onChange={(e) => setEditReuniao({ ...editReuniao, link: e.target.value })} required />
                </div>

                <div className="row mt-4">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputData">Data</label>
                        <input type="date" className="form-control" id="inputHora" placeholder="Data" value={editReuniao.data_reuniao || ''} 
                        onChange={(e) => setEditReuniao({ ...editReuniao, data_reuniao: e.target.value })} required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputHora">Hora</label>
                        <input type="time" className="form-control" id="inputHora" placeholder="Hora" value={editReuniao.hora_reuniao || ''} 
                        onChange={(e) => setEditReuniao({ ...editReuniao, hora_reuniao: e.target.value })} required />
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="form-group col-md-6">
                        <label>Livro</label>
                        <input type="text" className="form-control" value={editReuniao.livro || ''} 
                        onChange={(e) => setEditReuniao({ ...editReuniao, livro: e.target.value })}
                        placeholder="Livro" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Autor</label>
                        <input type="text" className="form-control" value={editReuniao.autor|| ''} 
                        onChange={(e) => setEditReuniao({ ...editReuniao, autor: e.target.value })}
                        placeholder="Autor" />
                    </div>
                </div>

                <div className="form-group mt-4">
                    <button type="submit" className="btn mt-4" style={{ backgroundColor: "var(--purple)", color: "var(--white)" }}> Salvar </button>

                    <Link to={"/reunion"}>
                        <button type="button" className="btn mt-4" style={{ backgroundColor: 'var(--purple)', color: 'var(--white)', marginLeft: "1rem" }}>
                            Voltar
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
}
