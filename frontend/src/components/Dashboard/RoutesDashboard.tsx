import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { SideBarRight } from '../SideBars/SideBarLeft';
import { SideBarLeft } from '../SideBars/SideBarRight';
import { Dashboard } from './Dashboard';
import styles from './Dashboard.module.css';
import { Enquete } from '../Enquete/Enquete';
import { CreateEnquete } from '../Enquete/CreateEnquete';
import { Profile } from '../Profile/Profile';
import { EditProfile } from '../Profile/EditProfile';
import { ListEnquete } from '../Enquete/ListEnquete';
import { Reunion } from '../Reunion/Reunion';
import { CreateReunion } from '../Reunion/CreateReunion';
import { EditReunion } from '../Reunion/EditReunion';
import { Livros } from '../Livros/Livros';
import { Calendario } from '../Agenda/Calendario';
import { CreateCalendar } from '../Agenda/CreateCalendar';
import { EditCalendar } from '../Agenda/EditCalendar';

interface Clube {
    name: string;
}

interface Notification {
    id: number;
    message: string;
    date: string;
}

export function RoutesDashboard() {
    const [nameClub, setNameClub] = useState<Clube>({ name: '' });
    //const [, setNotifications] = useState<Notification[]>([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const club_id = Cookies.get('club_id');
    
    const role = Cookies.get('role');
    const isAdmin = role === 'admin';

    useEffect(() => {
        async function fetchData() {
            try {
                const clubResponse = await axios.get(`http://localhost:8000/api/club/getClubById/${club_id}`);
                setNameClub(clubResponse.data[0]);
                //const notificationsResponse = await axios.get(`http://localhost:8000/api/notifications/${club_id}`);
                //setNotifications(notificationsResponse.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    const toggleNotifications = () => {
        setShowNotifications(prevState => !prevState);
    };
    
    return (
        <>
            <BrowserRouter>
                <div className="container-fluid">
                    <div className="row">
                        <div className={`col-md-3 ${styles.sideBarLeft}`}>
                            <SideBarRight />
                        </div>
                        <div className="col-md-5" style={{ maxHeight: '50%', overflowY: 'auto' }}>
                            <div className="row">
                                <div className="col-md-6 mt-4">
                                    <b>{nameClub.name}</b>
                                </div>
                                {isAdmin && (
                                    <div className='col-md-6 mt-4 d-flex justify-content-end' style={{ paddingRight: '4rem' }}>
                                        <span className="material-symbols-outlined" data-toggle="modal" data-target="#modalExemplo" onClick={() => toggleNotifications()} style={{ cursor: 'pointer' }}>notifications</span>
                                    </div>
                                )}
                            </div>
                            <hr style={{ borderTop: '2px solid gray' }} />
                            <main>
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    <Route path="/enquete" element={<Enquete />} />
                                    <Route path="/listenquete" element={<ListEnquete />} />
                                    <Route path="/createenquete" element={<CreateEnquete />} />
                                    <Route path="/reunion" element={<Reunion />} />
                                    <Route path="/createreunion" element={<CreateReunion />} />
                                    <Route path="/editreunion/:id" element={<EditReunion />} />
                                    <Route path="/profile" element={<Profile />} />
                                    <Route path="/editprofile" element={<EditProfile />} />
                                    <Route path="/livros" element={<Livros />} />
                                    <Route path="/calendario" element={<Calendario />} />
                                    <Route path='/createcalendario' element={<CreateCalendar />} />
                                    <Route path='/editcalendario/:id' element={<EditCalendar />} />
                                </Routes>
                            </main>
                        </div>
                        <div className="col-md-4" style={{ position: 'sticky', top: 0 }}>
                            <SideBarLeft />
                        </div>
                    </div>
                </div>
            </BrowserRouter>

            {showNotifications && (
                <div className="modal fade" id="modalExemplo" tab-idex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Notificações</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        <span style={{ fontWeight: "bold" }}>Pedido para entrar no clube</span>
                        <p>Kauã Duarte está pedindo para entrar no clube</p>
                        <div>
                        <button className='btn btn-success'>Permitir</button>
                        <button className='btn btn-danger'>Negar</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            )}
        </>
    );
}
