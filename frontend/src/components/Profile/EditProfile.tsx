import React, { useEffect, useState } from 'react';
import axios from "axios";
import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import logo from '../../avatar/logo.jpeg';

import styles from './EditProfile.module.css'

import { Link } from 'react-router-dom';
import { Profile } from './Profile';

export function EditProfile() {
    interface Foto {
        imagem: File;
    }
    const [foto, setFoto] = useState<Foto>({ imagem: new File([], '') });
    const [status, setStatus] = useState<string>('');
    const [editprofile, setEditProfile] = useState([{}]);

    const user_id = Cookies.get('user_id');

    useEffect(() => {
        async function Profile() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/user/getUser/${user_id}`);
                setEditProfile(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        Profile();
    }, []);

    async function gravar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // cancela o submit
        try {
            const formData = new FormData();
            formData.append('imagem', foto.imagem);
            await axios.post(`http://127.0.0.1:8000/api/upload/${user_id}}`, formData);
            setStatus("Foto Atualizada");
        } catch (erro: unknown) {
            if (erro instanceof Error) {
                console.error(erro);
                setStatus(`Falha: ${erro.message}`);
            } else if (erro instanceof AxiosError) {
                console.error(erro);
                setStatus(`Falha: ${erro.response?.data?.message ?? 'Erro desconhecido'}`);
            } else {
                console.error(erro);
                setStatus(`Falha: Erro desconhecido`);
            }
        }
    }

    async function gravarDados(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const formData = new FormData();
            await axios.post(`http://127.0.0.1:8000/api/user/edit/${user_id}}`, formData);
            setStatus("Dados Atualizados");
        }
        catch (erro: unknown) {
            if (erro instanceof Error) {
                console.error(erro);
                setStatus(`Falha: ${erro.message}`);
            } else if (erro instanceof AxiosError) {
                console.error(erro);
                setStatus(`Falha: ${erro.response?.data?.message ?? 'Erro desconhecido'}`);
            } else {
                console.error(erro);
                setStatus(`Falha: Erro desconhecido`);
            }
        }
    }

    return (
        <>
            <div className="container">

                <form onSubmit={gravarDados} style={{ marginBottom: "3rem" }}>
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
                        src={`http://127.0.0.1:8000/api/user/getImage/${user_id}`}
                        alt="Imagem do perfil"
                        className="img-fluid rounded-circle align-self-start"
                        style={{ maxWidth: "100px", marginTop: '-7.125rem', marginLeft: '2rem' }}
                    />

                    <div className={`col-md-6 ${styles.cameraIconProfile}`}>
                        <label htmlFor="selecao-arquivo">
                            <span className="material-symbols-outlined">photo_camera</span>
                            <input id='selecao-arquivo' style={{ display: 'none' }} name='imagem' type='file' 
                            // value={foto.imagem.name || ''}
                            onChange={(e) => {
                                const selectedFile = e.target.files?.[0];
                                if (selectedFile) {
                                    setEditProfile({ ...editprofile, imagem: selectedFile });
                                }
                            }}
                            />
                        </label>
                    </div>

                    
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Nome</label>
                            <input type="text" 
                            className="form-control" 
                            id="inputName" 
                            placeholder="Nome" 
                            value={editprofile.name} 
                            onChange={(e) => {setEditProfile({ ...editprofile, name: e.target.value });}}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="sr-only">Sobrenome</label>
                            <div className="input-group">                                
                                <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Usuário" 
                                value={editprofile.last_name}
                                onChange={(e) => {setEditProfile({ ...editprofile, last_name: e.target.value });}}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group mt-4">
                        <label>Bio</label>
                        <input type="text" className="form-control" id="inputBio" placeholder="Bio" 
                        value={editprofile.bio}
                        onChange={(e) => {setEditProfile({ ...editprofile, bio: e.target.value });}}
                        />
                    </div>

    

                    <div className="row mt-4">
                        <div className="form-group col-md-6">
                            <label>Data de nascimento</label>
                            <input type="date" className="form-control" id="inputNascimento" placeholder="Dasta de nascimento" 
                            value={editprofile.birthday_date}
                            onChange={(e) => {setEditProfile({ ...editprofile, birthday_date: e.target.value });}}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Telefone</label>
                            <input type="text" className="form-control" id="inputTelefone" placeholder="Telefone" 
                            value={editprofile.phone_number}
                            onChange={(e) => {setEditProfile({ ...editprofile, phone_number: e.target.value });}}
                            />
                        </div>
                    </div>
            
                    <button type="submit" className="btn mt-4" style={{ backgroundColor: 'var(--purple)', color: 'var(--white' }}>Salvar</button>
                    <Link to={"/profile"}>
                        <button type="button" className="btn mt-4" style={{ backgroundColor: 'var(--purple)', color: 'var(--white', marginLeft: "1rem" }}>
                            Voltar
                        </button>
                    </Link>
                </form>

            </div>
        </>
    );
}