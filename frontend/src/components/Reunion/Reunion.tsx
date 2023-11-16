import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import styles from './Reunion.module.css';

export function Reunion() {

    const [reuniao, setReuniao] = useState([]);
    const [loading, setLoading] = useState(true);
    const club_id = Cookies.get('club_id');

    useEffect(() => {
        async function Reuniao() {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/reuniao/getAllReuniaoByClub/${club_id}`);
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

                    <ul className={`list-group-flush mt-4 ${styles.hoverEffect}`} key={reunioes.id}>
                        <Link to={`/editreunion/${reunioes.id}`} className="nav-link d-flex flex-row mt-4 mb-4">
                            <li className="list-group-item mt-4 mb-4">
                                <div className='d-flex'>
                                    <div className="mt-1">
                                        <span className="d-block">{reunioes.titulo}</span>
                                        <span style={{ color: '#5b6b77' }}>{reunioes.descricao}</span>
                                    </div>
                                </div>
                            </li>     
                        </Link>          
                    </ul> 

                ))}

            </div>
        </>
    )
}