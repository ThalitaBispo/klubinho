import styles from './EditProfile.module.css'
import { Link } from 'react-router-dom';
import logo from '../../avatar/logo.jpeg';

import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';

export function EditProfile() {

    const [editProfile, setEditProfile] = useState([]);
    const [status, setStatus] = useState('');
    const user_id = Cookies.get('user_id');

    useEffect(() => {
        async function EditProfile() {
            try {
                const response = await axios.get(`http://localhost:8000/api/user/getUser/${user_id}`);
                setEditProfile(response.data[0]);
            } catch (error) {
                console.error(error);
            }
        }

        EditProfile();
    }, []);

    async function gravar(e: any) {
        e.preventDefault();
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/user/update/${user_id}`, editProfile);

            // Atualize a imagem separadamente
            const formData = new FormData();
            formData.append('imagem', e.target.elements['selecao-arquivo'].files[0]);

            await axios.post(`http://127.0.0.1:8000/api/upload/${user_id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setStatus("Perfil Atualizado");
            alert("Perfil atualizado com sucesso!!");
            window.location.reload()
        } catch (erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
    
    return (
        <>
            <div className="container">

                <form onSubmit={gravar} style={{ marginBottom: "3rem" }}>
                    <img 
                        src="https://i.pinimg.com/564x/7f/06/16/7f06166fd703e6549ae9baea4a5c7519.jpg"
                        alt="Imagem"
                        className="img-fluid mt-3"
                        style={{ width: "800px", height: '300px', objectFit: 'cover'}}
                    />
                    
                    <div className={`col-md-6 ${styles.cameraIcon}`}>
                        <label htmlFor="selecao-foto">
                            <span className="material-symbols-outlined">photo_camera</span>
                            <input id='selecao-foto' style={{ display: 'none' }} type='file' 
                            />
                        </label>
                    </div>

                        <img
                            src={
                                editProfile.imagem
                                ? `http://127.0.0.1:8000/api/user/getImage/${user_id}`
                                : logo
                            }
                            alt="Imagem do perfil"
                            className="img-fluid rounded-circle align-self-start"
                            style={{ maxWidth: "100px", marginTop: '-7.125rem', marginLeft: '2rem' }}
                        />

                    <div className={`col-md-6 ${styles.cameraIconProfile}`}>
                        <label htmlFor="selecao-arquivo">
                            <span className="material-symbols-outlined">photo_camera</span>
                            <input id='selecao-arquivo' style={{ display: 'none' }} name='imagem' type='file'                         
                            />
                        </label>
                    </div>

                    
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name" placeholder="Nome"
                            value={editProfile.name || ''}
                            onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="sr-only">Sobrenome</label>
                            <div className="input-group">                                
                                <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Usuário" 
                                value={editProfile.last_name || ''}
                                onChange={(e) => setEditProfile({ ...editProfile, last_name: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group mt-4">
                        <label>Bio</label>
                        <input type="text" className="form-control" id="inputBio" placeholder="Bio" 
                        value={editProfile.bio || ''}
                        onChange={(e) => setEditProfile({ ...editProfile, bio: e.target.value })}
                        />
                    </div>

    

                    <div className="row mt-4">
                        <div className="form-group col-md-6">
                            <label>Data de nascimento</label>
                            <input type="date" className="form-control" id="inputNascimento" placeholder="Dasta de nascimento" 
                            value={editProfile.birthday_date || ''}
                            onChange={(e) => setEditProfile({ ...editProfile, birthday_date: e.target.value })}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Telefone</label>
                            <input type="number" className="form-control" id="inputTelefone" placeholder="Telefone" 
                            value={editProfile.phone_number || ''}
                            onChange={(e) => setEditProfile({ ...editProfile, phone_number: e.target.value })}
                            />
                        </div>
                    </div>
            
                    <button type="submit" className="btn mt-4" style={{ backgroundColor: 'var(--purple)', color: 'var(--white)' }}>Salvar</button>

                    <Link to={"/profile"}>
                        <button type="button" className="btn mt-4" style={{ backgroundColor: 'var(--purple)', color: 'var(--white)', marginLeft: "1rem" }}>
                            Voltar
                        </button>
                    </Link>
                </form>

            </div>
        </>
    );
}