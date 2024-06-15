import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import logo from '../../avatar/logo.jpeg';
import styles from './Profile.module.css';
import { Link } from 'react-router-dom';

export function EditProfile() {
    const [editProfile, setEditProfile] = useState({});
    const [status, setStatus] = useState('');
    const [selectedImagePreview, setSelectedImagePreview] = useState(logo);
    const [bannerImagePreview, setBannerImagePreview] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const user_id = Cookies.get('user_id');

    useEffect(() => {
        async function fetchEditProfile() {
            try {
                const response = await axios.get(`http://localhost:8000/api/user/getUser/${user_id}`);
                const user = response.data[0];
                setEditProfile(user);
                setBannerImagePreview(user.banner ? `http://127.0.0.1:8000/api/user/getBanner/${user_id}` : '');
                setSelectedImagePreview(user.imagem ? `http://127.0.0.1:8000/api/user/getImage/${user_id}` : logo);
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error);
            }
        }

        fetchEditProfile();
    }, [user_id]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBannerImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBannerImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const gravar = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://127.0.0.1:8000/api/user/update/${user_id}`, editProfile);

            if (selectedImage) {
                const formData = new FormData();
                formData.append('imagem', selectedImage);
                await axios.post(`http://127.0.0.1:8000/api/upload/${user_id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }

            if (bannerImagePreview && bannerImagePreview !== editProfile.banner) {
                const bannerFormData = new FormData();
                bannerFormData.append('banner', bannerImagePreview);
                await axios.post(`http://127.0.0.1:8000/api/upload/banner/${user_id}`, bannerFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }

            setStatus("Perfil Atualizado");
            alert("Perfil atualizado com sucesso!!");
            window.location.reload();
        } catch (erro) {
            console.error('Erro ao atualizar o perfil:', erro);
            setStatus(`Falha: ${erro}`);
        }
    };

    return (
        <>
            <div className="container">
                <form onSubmit={gravar} style={{ marginBottom: "3rem" }}>
                    <div className='mb-4'>
                        <label htmlFor="selecao-banner" style={{ cursor: 'pointer' }}>
                            <img 
                                src={bannerImagePreview || "https://i.pinimg.com/564x/7f/06/16/7f06166fd703e6549ae9baea4a5c7519.jpg"}
                                alt="Banner"
                                className={styles['banner-image']}
                            />
                        </label>
                        <input 
                            id='selecao-banner' 
                            style={{ display: 'none' }} 
                            type='file' 
                            onChange={handleBannerImageChange} 
                        />
                    </div>
                    
                    <div className={`col-md-6 ${styles.cameraIconProfile}`}>
                        <label htmlFor="selecao-arquivo">
                            <input 
                                id='selecao-arquivo' 
                                style={{ display: 'none' }} 
                                name='imagem' 
                                type='file' 
                                onChange={handleImageChange} 
                            />
                            <img
                                src={selectedImagePreview || logo}
                                alt="Imagem do perfil"
                                className={`img-fluid rounded-circle align-self-start ${styles.customImage}`}
                            />
                            <span className="material-symbols-outlined">photo_camera</span>
                        </label>
                    </div>
                    
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Nome</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                placeholder="Nome"
                                value={editProfile.name || ''}
                                onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="sr-only">Sobrenome</label>
                            <div className="input-group">                                
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inlineFormInputGroupUsername" 
                                    placeholder="Usuário" 
                                    value={editProfile.last_name || ''}
                                    onChange={(e) => setEditProfile({ ...editProfile, last_name: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group mt-4">
                        <label>Bio</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputBio" 
                            placeholder="Bio" 
                            value={editProfile.bio || ''}
                            onChange={(e) => setEditProfile({ ...editProfile, bio: e.target.value })}
                        />
                    </div>

                    <div className="row mt-4">
                        <div className="form-group col-md-6">
                            <label>Data de nascimento</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                id="inputNascimento" 
                                placeholder="Data de nascimento" 
                                value={editProfile.birthday_date || ''}
                                onChange={(e) => setEditProfile({ ...editProfile, birthday_date: e.target.value })}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Telefone</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="inputTelefone" 
                                placeholder="Telefone" 
                                value={editProfile.phone_number || ''}
                                onChange={(e) => setEditProfile({ ...editProfile, phone_number: e.target.value })}
                            />
                        </div>
                    </div>
            
                    <button 
                        type="submit" 
                        className="btn mt-4" 
                        style={{ backgroundColor: 'var(--purple)', color: 'var(--white)' }}
                    >
                        Salvar
                    </button>

                    <Link to={"/profile"}>
                        <button 
                            type="button" 
                            className="btn mt-4" 
                            style={{ backgroundColor: 'var(--purple)', color: 'var(--white)', marginLeft: "1rem" }}
                        >
                            Voltar
                        </button>
                    </Link>
                </form>
            </div>
        </>
    );
}
