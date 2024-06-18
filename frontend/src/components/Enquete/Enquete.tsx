import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import styles from './Enquete.module.css';

export function Enquete() {
    const [enquete, setEnquete] = useState([]);
    const [loading, setLoading] = useState(true);
    const [votes, setVotes] = useState({}); // Estado para armazenar os votos
    const [userVoted, setUserVoted] = useState(false); // Estado para rastrear se o usuário já votou
    const club_id = Cookies.get('club_id');
    const user_id = Cookies.get('user_id'); // Supondo que você tenha um ID de usuário nos cookies
    const last_enquete_id = Cookies.get('last_enquete_id');

    useEffect(() => {
        async function fetchEnquete() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/enquete/getOpcoes/${last_enquete_id}`);
                const enquetesData = response.data;
                setEnquete(enquetesData);
                
                // Inicializar os votos com zero
                const initialVotes = {};
                enquetesData.forEach(enquete => {
                    initialVotes[enquete.id] = 0;
                });
                setVotes(initialVotes);
                
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        fetchEnquete();
    }, [club_id]);

    const handleVote = (id) => {
        if (!userVoted) {
            setVotes(prevVotes => ({
                ...prevVotes,
                [id]: prevVotes[id] + 1
            }));
            setUserVoted(true);
        }
    };

    return (
        <>
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-md-8 mt-4" style={{ fontSize: '1.5rem' }}>
                        <b>Enquete</b>
                        <b> - </b>
                        <b>Livro da semana</b>
                    </div>
                </div>
                
                <div className="row mt-4">
                    {enquete.map((enquetes) => (    
                        <div className="col-md-4 mt-4" key={enquetes.id}>
                            <div className="card" style={{ width: '14rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontSize: '1rem' }}>{enquetes.titulo}</h5>
                                    <p className="card-text text-truncate" style={{ fontSize: '0.9rem' }}>{enquetes.description}</p>
                                    <button 
                                        style={{ 
                                            marginLeft: '-0.5rem', 
                                            padding: '0.25rem 1rem',
                                            backgroundColor: userVoted ? 'gray' : '', // Muda a cor se o usuário já votou
                                            cursor: userVoted ? 'not-allowed' : 'pointer' // Muda o cursor se o usuário já votou
                                        }}
                                        onClick={() => handleVote(enquetes.id)}
                                        disabled={userVoted} // Desativa o botão se o usuário já votou
                                    >
                                        Votar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>               
            </div>

            <div className="container">
                <div className="row mt-4" style={{ padding: '1rem' }}>
                    <b style={{ fontSize: '1.5rem' }}>Votação</b>
                </div>

                <div className="row mt-2 mb-4" style={{ padding: '0 0 0 1rem' }}>
                    <div className="col-md-8">
                        <span style={{ fontSize: '1.2rem' }}>Opções</span>
                    </div>

                    <div className="col-md-2">
                        <span style={{ fontSize: '1.2rem' }}>votos</span>
                    </div>
                </div>
            </div>        

            {enquete.map((enquetes) => (
                <div key={enquetes.id} className={`nav-link list-group-flush ${styles.customVotos}`}>
                    <div className="d-flex mt-2 mb-2 align-items-center">
                        <div className={`col-md-6 d-flex flex-column ${styles.customTitle}`}>
                            <span>{enquetes.title}</span>
                            <span style={{ color: '#5b6b77' }}>{enquetes.titulo}</span>
                        </div>

                        <div className={`col d-flex justify-content-center align-items-center ${styles.customTitle}`}>
                            <span style={{ fontSize: "1.25rem" }}>
                                {Object.values(votes).reduce((a, b) => a + b, 0) === 0 
                                    ? "0%" 
                                    : ((votes[enquetes.id] / Object.values(votes).reduce((a, b) => a + b, 0)) * 100).toFixed(2) + "%"}
                            </span>
                        </div>
                    </div>
                </div>   
            ))}       
        </>
    );
}
