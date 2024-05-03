import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import styles from './Reunion.module.css';

interface Reunion {
    id: number;
    titulo: string;
    descricao: string;
    data_reuniao: string;
}

export function Reunion() {

    const [reuniao, setReuniao] = useState<Reunion[]>([]);
    const [, setLoading] = useState(true);
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
    }, [club_id]);

    return(
        <>
            <div className="container">
                <Link className="nav-link" to={"/createreunion"}>
                    <button>
                        Criar Reunião
                    </button>
                </Link>

                <div className="row mt-4">
                    <div className="col-md-8 mt-4" style={{ fontSize: '1.5rem' }}>
                        <b className="mt-4">Reunião</b>
                    </div>
                </div>

                {reuniao.map((reunioes) => (

                    <ul className={`list-group-flush mt-4 ${styles.customReunion}`} key={reunioes.id}>
                        <Link to={`/editreunion/${reunioes.id}`} className="nav-link d-flex flex-row mt-4 mb-4">
                            <li className="list-group-item">
                                <div className='row d-flex'>
                                    <div className="col-md-8 mt-1">
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