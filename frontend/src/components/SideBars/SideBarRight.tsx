//import styles from './SideBarRight.module.css'
import styles from '../../global.module.css'
import Cookies from 'js-cookie';
import logo from '../../avatar/logo.jpeg';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function SideBarLeft() {

    //get
    const [totalIntegrantes, setTotalIntegrantes] = useState(0);
    const [integrantes, setIntegrantes] = useState([]);
    const [loading, setLoading] = useState(true);
    const club_id = Cookies.get('club_id');


    useEffect(() => {
        async function Profile() {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/api/clubIntegrantes/getClubIntegrantesWithUser/${club_id}`);

            const resp = await axios.get(`http://127.0.0.1:8000/api/clubIntegrantes/getTotalIntegrantes/${club_id}`);
                                setTotalIntegrantes(resp.data.number_of_integrantes);


            setIntegrantes(response.data);
            setLoading(false);
          } catch (error) {
            console.error(error);
          }
        }
    
        Profile();
      }, []);

    return(
        <>
            <div className="container col-md-8 mt-4">
                <div className="card" style={{ borderRadius: '20px', border: 'none' }}>
                    <div className="card-body bg-light" style={{ fontSize: '0.9rem' }}>
                        <b style={{ fontSize: '1.25rem'}}>Agenda</b>

                        <p style={{ marginTop: '1.25rem'}}>
                            <span className="card-subtitle mb-2 text-muted">Segunda-Feira</span>
                            <span style={{margin: '0 10px'}}>.</span> 
                            <span className="card-subtitle mb-2 text-muted">06/02/2023</span>
                        </p>
                        <p className="card-text">Leitura do capitulo 7 da Biografia da Maria José (Cururu)</p>
                        <p className='mb-4'>
                            <span className="card-subtitle mb-2 text-muted">Por: </span>
                            <span className={`card-subtitle mb-2 ${styles.fontPurple}`}>André Nery</span>
                        </p>

                        <p style={{ marginTop: '2rem' }}>
                            <span className="card-subtitle mb-2 text-muted">Segunda-Feira</span>
                            <span style={{margin: '0 10px'}}>.</span> 
                            <span className="card-subtitle mb-2 text-muted">06/02/2023</span>
                        </p>
                        <p className="card-text">Leitura do capitulo 7 da Biografia da Maria José (Cururu)</p>
                        <p>
                            <span className="card-subtitle mb-2 text-muted">Por: </span>
                            <span className={`card-subtitle mb-2 ${styles.fontPurple}`}>André Nery</span>
                        </p>

                    </div>
                    <div className="card-footer text-muted">
                        <a href="#" className={`nav-link ${styles.fontPurple}`}>Acessar agenda</a>
                    </div>
                </div>
            </div>

            <div className="container col-md-8 mt-4">
                <div className="card" style={{ borderRadius: '20px', border: 'none' }}>
                    <div className="card-body bg-light" style={{ fontSize: '0.9rem' }}>

                        <b style={{ fontSize: '1.25rem' }}> Integrantes </b>
                        <span style={{ marginLeft: '10px' }}>({totalIntegrantes})</span>

                        {integrantes.map((integrante) => (

                        <div className='d-flex flex-row' key={integrante.id} style={{ marginTop: '1.25rem'}}>
                            <img
                                src={
                                    integrante.imagem
                                    ? `http://127.0.0.1:8000/api/user/getImage/${integrante.user_id}`
                                    : logo
                                }
                                alt="Imagem do perfil"
                                className="img-fluid rounded-circle align-self-start"
                                style={{ maxWidth: "40px"}}
                            />
                            <div className="mt-2" style={{marginLeft: '0.5rem'}}>
                                <div className="d-block">{integrante.name} {integrante.last_name}</div>
                            </div>
                        </div>  

                        ))}

                    </div>
                    <div className="card-footer text-muted">
                        <a href="#" className={`nav-link ${styles.fontPurple}`}>Mostrar mais</a>
                    </div>
                </div>
            </div>
        </>
    )
}