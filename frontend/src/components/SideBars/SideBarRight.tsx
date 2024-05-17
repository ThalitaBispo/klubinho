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

interface Calendario {
    id: number;
    titulo: string;
    data_evento: string;
    hora_evento: string;
    fim_evento: string;
}

export function SideBarLeft() {
    const [totalIntegrantes, setTotalIntegrantes] = useState<number>(0);
    const [integrantes, setIntegrantes] = useState<Integrante[]>([]);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [calendario, setCalendario] = useState<Calendario[]>([]);
    const [filteredCalendario, setFilteredCalendario] = useState<Calendario[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [, setLoading] = useState(true);
    const club_id: string | undefined = Cookies.get('club_id');

    useEffect(() => {
        async function fetchData() {
            try {
                if (club_id) {
                    const [integrantesResp, totalResp] = await Promise.all([
                        axios.get<Integrante[]>(`http://127.0.0.1:8000/api/clubIntegrantes/getClubIntegrantesWithUser/${club_id}`),
                        axios.get<{ number_of_integrantes: number }>(`http://127.0.0.1:8000/api/clubIntegrantes/getTotalIntegrantes/${club_id}`)
                    ]);
                    setTotalIntegrantes(totalResp.data.number_of_integrantes);
                    setIntegrantes(integrantesResp.data);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchCalendario() {
            try {
                if (club_id) {
                    const response = await axios.get<Calendario[]>(`http://127.0.0.1:8000/api/eventos/${club_id}`);
                    setCalendario(response.data);
                    setFilteredCalendario(response.data);
                    setLoading(false);
                }
            } catch (error) {
                console.error(error);
            }
        }
        if (club_id) {
            fetchCalendario();
        }
    }, []);

    function handleDateClick(day: Date) {
        if (selectedDate && day.toDateString() === selectedDate.toDateString()) {
            setSelectedDate(null);
            setFilteredCalendario(calendario);
        } else {
            setSelectedDate(day);
            const filtered = calendario.filter(evento => {
                const eventDate = new Date(evento.data_evento);
                return eventDate.getDay() === (day.getDay()-1);
            });
            setFilteredCalendario(filtered);
        }
    }

    function renderCalendar() {
        const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        const sundayOfThisWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + (0 - currentDate.getDay()));
        const calendar = [];

        for (let i = 0; i < 7; i++) {
            const day = new Date(sundayOfThisWeek.getFullYear(), sundayOfThisWeek.getMonth(), sundayOfThisWeek.getDate() + i);
            const dayOfWeek = daysOfWeek[i];
            const isSelected = selectedDate && day.toDateString() === selectedDate.toDateString();
            calendar.push(
                <div
                    key={i}
                    className={`col ${styles.customCalendario}`}
                    onClick={() => handleDateClick(day)}
                    style={{
                        backgroundColor: isSelected ? 'var(--purple)' : 'transparent',
                        color: isSelected ? 'white' : 'black',
                        cursor: 'pointer'
                    }}
                >
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
        setSelectedDate(null);
        setFilteredCalendario(calendario);
    }

    function nextWeek() {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 7));
        setSelectedDate(null);
        setFilteredCalendario(calendario);
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
                                <button className={`btn btn-sm me-2 ${styles.buttonCalendar}`} onClick={prevWeek}>&lt; Anterior</button>
                                <button className={`btn btn-sm me-2 ${styles.buttonCalendar}`} onClick={nextWeek}>Próxima &gt;</button>
                            </div>
                        </div>
                        {renderCalendar()}
                    </div>

                    <div className="row">
                        <span className='mb-2'>Calendário</span>
                        {filteredCalendario.slice(0, 4).map((evento) => (
                            <div className="col-md-12" key={evento.id}>
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="card-body text-center" style={{ padding: '0.5rem' }}>
                                            <h5 className="card-title" style={{ fontSize: "1rem" }}>
                                                {new Date(new Date(evento.data_evento).getTime() + (24 * 60 * 60 * 1000)).toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '').toUpperCase()}
                                            </h5>
                                            <b className="card-text" style={{ fontSize: "1.2rem" }}>
                                                {new Date(evento.data_evento).getUTCDate()}
                                            </b>
                                        </div>
                                    </div>
                                    <div className="col-md-10 mb-3">
                                        <div className="bg-white p-1">
                                            <div className="card-body" style={{ borderLeft: '2px solid var(--purple)', padding: '0.5rem', margin: '0 0 0 0.5rem' }}>
                                                <h5 className="card-title text-dark mb-0" style={{ fontSize: "1rem" }}>{evento.titulo}</h5>
                                                <p className="card-text text-muted mt-0" style={{ fontSize: "0.8rem" }}>{evento.hora_evento} - {evento.fim_evento}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card-footer text-muted bg-light">
                        <a href="/calendario" className={`nav-link ${styles.fontPurple}`}>Acessar agenda</a>
                    </div>
                </div>
            </div>

            <div className="container col-md-10 mt-4">
                <div className="card" style={{ borderRadius: '20px', border: 'none' }}>
                    <div className="card-body bg-light" style={{ fontSize: '0.9rem' }}>
                        <b style={{ fontSize: '1.25rem' }}>Integrantes</b>
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
