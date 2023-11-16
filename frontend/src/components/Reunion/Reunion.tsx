import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";

export function Reunion() {

    const [reuniao, setReuniao] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function Reuniao() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/reuniao/getAllReuniaoByClub/2');
            setReuniao(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
        }

        Reuniao();
    }, []);

    return(
        <>
            <div className="container">
                <Link className="nav-link" to={"/createreunion"}>
                    <button className="btn" style={{ backgroundColor: 'var(--purple)', color: "white" }}>
                        Criar Reunião
                    </button>
                </Link>

                <div className="row mt-4">
                    <div className="col-md-8 mt-4" style={{ fontSize: '1.5rem' }}>
                        <b className="mt-4">Reunião</b>
                    </div>
                </div>

                {reuniao.map((reunioes) => (

                    <ul className="list-group-flush" key={reunioes.id}>
                        <li className="list-group-item">
                            <div className='d-flex'>
                                <Link to="/editreunion" className="nav-link d-flex flex-row mt-4">
                                    <div className="col-md-6 mt-2">
                                        <div className="mt-1">
                                            <span className="d-block">{reunioes.titulo}</span>
                                            <span style={{ color: '#5b6b77' }}>{reunioes.descricao}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn" style={{ margin: "1rem 0rem 1rem 18rem", backgroundColor: 'var(--purple)', color: "white" }}>Acessar</button>
                                    </div>
                                </Link>
                            </div>
                        </li>               

                    </ul>

                ))}

            </div>
        </>
    )
}