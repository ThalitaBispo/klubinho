import { Link , useNavigate } from 'react-router-dom';
import styles from './SideBarLeft.module.css';
import Cookies from 'js-cookie';
import logo from '../../avatar/logo.jpeg';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function SideBarRight() {

    const navigate = useNavigate();
    const handleLogout = () => {
        // Remova os cookies quando o usuário faz logout
        Cookies.remove('user_id');
        Cookies.remove('token');
        Cookies.remove('club_id');
        Cookies.remove('role');
        // navigate('/');
      };

    //get
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(true);
    const user_id = Cookies.get('user_id');

    useEffect(() => {
        async function Profile() {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/api/user/getUser/${user_id}`);
            setProfile(response.data);
            setLoading(false);
          } catch (error) {
            console.error(error);
          }
        }
    
        Profile();
      }, []);

    return(
        <>
            <div className={`container ${styles.sideBarLeft}`}>
                <nav className="navbar navbar-expand-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className={`navbar-nav flex-column ${styles.menu}`}>
                            <span  className={styles.logo}>KLUBINHOS</span>

                            <li className={`nav-item ${styles.menuItem}`}>
                                <Link className='nav-link d-flex align-items-center'  to="/">
                                    <span className="material-symbols-outlined">home</span>
                                    <span className='p-2'>Home</span>
                                </Link>
                            </li>

                            <li className={`nav-item ${styles.menuItem}`}>
                                <Link className='nav-link d-flex align-items-center' to="/listenquete">
                                    <span className="material-symbols-outlined">voting_chip</span>
                                    <span className='p-2'>Enquete</span>
                                </Link>
                            </li>
                            
                            <li className={`nav-item ${styles.menuItem}`}>
                                <Link className='nav-link d-flex align-items-center'  to="/reunion">
                                    <span className="material-symbols-outlined">article</span>
                                    <span className='p-2'>Reunião</span>
                                </Link>
                            </li>

                            <li className={`nav-item ${styles.menuItem}`}>
                                <Link className='nav-link d-flex align-items-center' to="/calendario">
                                    <span className="material-symbols-outlined">calendar_month</span>
                                    <span className='p-2'>Calendário</span>
                                </Link>
                            </li>
                            
                            <li className={`nav-item ${styles.menuItem}`}>
                                <Link className='nav-link d-flex align-items-center' to="/profile">
                                    <span className="material-symbols-outlined">person</span>
                                    <span className='p-2'>Perfil</span>
                                </Link>
                            </li>

                            <li className={`nav-item d-flex ${styles.userProfile} ${styles.hoverEffect}`}>
                                <div className="dropdown">
                                    <a
                                    className="nav-link d-flex flex-row mt-4"
                                    href="#"
                                    role="button"
                                    id="userDropdown"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    >
                                        {profile.map((profiles) => (
                                            <div key={profiles.id} className="d-flex" style={{ alignItems: 'center' }}>
                                                <img
                                                src={
                                                    profiles.imagem
                                                    ? `http://127.0.0.1:8000/api/user/getImage/${user_id}`
                                                    : logo
                                                }
                                                alt="Imagem do perfil"
                                                className="img-fluid rounded-circle align-self-start"
                                                style={{ width: '4rem', height: '4rem' }}
                                                />

                                                <div className="mt-3" style={{ marginLeft: '1rem' }}>
                                                <div className="d-block">{profiles.name} {profiles.last_name}</div>
                                                <div className="d-block">{profiles.club_name}</div>
                                                </div>
                                            </div>
                                            ))}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="/" onClick={handleLogout}>
                                            Logout
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav> 
            </div>
        </>
    )
} 