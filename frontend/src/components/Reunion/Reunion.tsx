import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import styles from './Reunion.module.css';

import ptBR from 'date-fns/locale/pt-BR';
import { format, addDays } from 'date-fns';

interface Reunion {
    id: number;
    titulo: string;
    descricao: string;
    data_reuniao: string;
}

export function Reunion() {

    const [reuniao, setReuniao] = useState<Reunion[]>([]);
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
    }, [club_id]);

    // Organize as reuniões por data
    const reunioesPorData = {};
    reuniao.forEach(reunioes => {
        const dataReuniao = format(addDays(new Date(reunioes.data_reuniao), 1), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
        if (!reunioesPorData[dataReuniao]) {
            reunioesPorData[dataReuniao] = [];
        }
        reunioesPorData[dataReuniao].push(reunioes);
    });

    // Função para formatar a descrição com quebra de linha a cada 60 caracteres
    const formatarDescricao = (descricao: string) => {
        if (descricao.length > 60) {
            return descricao.match(/.{1,60}/g).join('\n');
        }
        return descricao;
    };

    return(
        <>
            <div className="container">
                <Link className="nav-link" to={"/createreunion"}>
                    <button>
                        Criar Reunião
                    </button>
                </Link>

                <div className="row mt-4 mb-4">
                    <div className="col-md-8 mt-4" style={{ fontSize: '1.5rem' }}>
                        <b className="mt-4">Reunião</b>
                    </div>
                </div>

                {loading ? (
                    <div>Carregando...</div>
                ) : (
                    Object.keys(reunioesPorData).map(data => (
                        <div key={data}>
                            <div className="col">
                                <span className="mt-4">{data}</span>
                            </div>

                            {reunioesPorData[data].map((reunioes) => (
                                <Link to={`/editreunion/${reunioes.id}`} className={`nav-link list-group-flush mt-4 ${styles.customReunion}`} key={reunioes.id}>
                                    <div className="d-flex flex-row mt-4 mb-4">
                                        <div className="list-group-item">
                                            <span className="material-symbols-outlined" style={{ color: '#5b6b77' }}>connect_without_contact</span>
                                            <div className="row d-flex">
                                                <div className="col-md-12 mt-1">
                                                    <span className="d-block">{reunioes.titulo}</span>
                                                    <span style={{ color: '#5b6b77' }}>{formatarDescricao(reunioes.descricao)}</span>
                                                </div>
                                            </div>
                                        </div>            
                                    </div> 
                                </Link> 
                            ))}
                        </div>
                    ))
                )}
            </div>  
        </>
    )
}
