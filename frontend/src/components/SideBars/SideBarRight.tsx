import styles from './SideBarRight.module.css';
import Cookies from 'js-cookie';
import logo from '../../avatar/logo.jpeg';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Integrante {
    id: number;
    imagem: string;
    user_id: number;
    name: string;
    last_name: string;
}

export function SideBarLeft() {
    const [totalIntegrantes, setTotalIntegrantes] = useState<number>(0);
    const [integrantes, setIntegrantes] = useState<Integrante[]>([]);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const club_id: string | undefined = Cookies.get('club_id');

    useEffect(() => {
        async function fetchData() {
            try {
                if (club_id) {
                    const response = await axios.get<Integrante[]>(`http://127.0.0.1:8000/api/clubIntegrantes/getClubIntegrantesWithUser/${club_id}`);
                    const resp = await axios.get<{ number_of_integrantes: number }>(`http://127.0.0.1:8000/api/clubIntegrantes/getTotalIntegrantes/${club_id}`);
                    setTotalIntegrantes(resp.data.number_of_integrantes);
                    setIntegrantes(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [club_id]);

    function renderCalendar() {
        const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        const sundayOfThisWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay());
        const calendar = [];

        for (let i = 0; i < 7; i++) {
            const day = new Date(sundayOfThisWeek.getFullYear(), sundayOfThisWeek.getMonth(), sundayOfThisWeek.getDate() + i);
            const dayOfWeek = daysOfWeek[i];
            calendar.push(
                <div key={i} className={`col ${styles.customCalendario}`}>
                    <p style={{ fontSize: '0.8rem', margin: '0' }}>{dayOfWeek}</p>
                    <p style={{ fontSize: '1.2rem', margin: '0', lineHeight: '1.5' }}>{day.getDate()}</p>
                </div>
            );
        }

        return (
            <div className="row">
                {calendar}
            </div>
        );
    }

    function prevWeek() {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() - 7));
    }

    function nextWeek() {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 7));
    }

    const currentMonthName = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(currentDate);
    const capitalizedMonth = currentMonthName.charAt(0).toUpperCase() + currentMonthName.slice(1);

    return (
        <>
            <div className="container col-md-10 mt-4">
                <div className="card bg-light" style={{ borderRadius: '20px', border: 'none', padding: '20px' }}>
                    <div className="card-body bg-light" style={{ fontSize: '0.9rem' }}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <b style={{ fontSize: '1.25rem' }}>{capitalizedMonth}</b>
                            <div>
                                <button className="btn btn-sm btn-outline-primary me-2" onClick={prevWeek}>&lt; Anterior</button>
                                <button className="btn btn-sm btn-outline-primary" onClick={nextWeek}>Próxima &gt;</button>
                            </div>
                        </div>
                        {renderCalendar()}
                    </div>

                    <div className="row">
                        <span className='mb-2'>Calendário</span>

                        <div className="col-md-2">
                            <div className="card-body text-center" style={{padding: '0.5rem'}}>
                                <h5 className="card-title" style={{ fontSize: "1rem" }}>SEG</h5>
                                <b className="card-text" style={{ fontSize: "1.2rem" }}>6</b>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="bg-white p-1">
                                <div className="card-body" style={{borderLeft: '2px solid var(--purple)', padding: '0.5rem', margin: '0 0 0 0.5rem'}}>
                                    <h5 className="card-title text-dark mb-0" style={{ fontSize: "1rem" }}>Reunião do livro</h5>
                                    <p className="card-text text-muted mt-0" style={{ fontSize: "0.8rem" }}>09h00 - 10h00</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card-body text-center" style={{padding: '0.5rem'}}>
                                <h5 className="card-title" style={{ fontSize: "1rem" }}>SEG</h5>
                                <b className="card-text" style={{ fontSize: "1.2rem" }}>6</b>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="bg-white p-1">
                                <div className="card-body" style={{borderLeft: '2px solid var(--purple)', padding: '0.5rem', margin: '0 0 0 0.5rem'}}>
                                    <h5 className="card-title text-dark mb-0" style={{ fontSize: "1rem" }}>Reunião do livro</h5>
                                    <p className="card-text text-muted mt-0" style={{ fontSize: "0.8rem" }}>09h00 - 10h00</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card-body text-center" style={{padding: '0.5rem'}}>
                                <h5 className="card-title" style={{ fontSize: "1rem" }}>TER</h5>
                                <b className="card-text" style={{ fontSize: "1.2rem" }}>7</b>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="bg-white p-1">
                                <div className="card-body" style={{borderLeft: '2px solid var(--purple)', padding: '0.5rem', margin: '0 0 0 0.5rem'}}>
                                    <h5 className="card-title text-dark mb-0" style={{ fontSize: "1rem" }}>Reunião do livro</h5>
                                    <p className="card-text text-muted mt-0" style={{ fontSize: "0.8rem" }}>09h00 - 10h00</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card-body text-center" style={{padding: '0.5rem'}}>
                                <h5 className="card-title" style={{ fontSize: "1rem" }}>QUA</h5>
                                <b className="card-text" style={{ fontSize: "1.2rem" }}>8</b>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="bg-white p-1">
                                <div className="card-body" style={{borderLeft: '2px solid var(--purple)', padding: '0.5rem', margin: '0 0 0 0.5rem'}}>
                                    <h5 className="card-title text-dark mb-0" style={{ fontSize: "1rem" }}>Reunião do livro</h5>
                                    <p className="card-text text-muted mt-0" style={{ fontSize: "0.8rem" }}>09h00 - 10h00</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="card-footer text-muted bg-light">
                        <a href="#" className={`nav-link ${styles.fontPurple}`}>Acessar agenda</a>
                    </div>
                </div>
            </div>

            <div className="container col-md-10 mt-4">
                <div className="card" style={{ borderRadius: '20px', border: 'none' }}>
                    <div className="card-body bg-light" style={{ fontSize: '0.9rem' }}>
                        <b style={{ fontSize: '1.25rem' }}> Integrantes </b>
                        <span style={{ marginLeft: '10px' }}>({totalIntegrantes})</span>
                        {integrantes.map((integrante) => (
                            <div className='d-flex flex-row' key={integrante.id} style={{ marginTop: '1.25rem' }}>
                                <img
                                    src={
                                        integrante.imagem
                                            ? `http://127.0.0.1:8000/api/user/getImage/${integrante.user_id}`
                                            : logo
                                    }
                                    alt="Imagem do perfil"
                                    className="img-fluid rounded-circle align-self-start"
                                    style={{ maxWidth: "40px" }}
                                />
                                <div className="mt-2" style={{ marginLeft: '0.5rem' }}>
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
    );
}
