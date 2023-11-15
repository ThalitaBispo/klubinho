import React, { useState } from 'react';
import axios from "axios";
import { AxiosError } from 'axios';

import styles from './EditProfile.module.css'

import { Link } from 'react-router-dom';

export function EditProfile() {
    interface Foto {
        imagem: File;
    }

    const [foto, setFoto] = useState<Foto>({ imagem: new File([], '') });
    const [status, setStatus] = useState<string>('');

    async function gravar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // cancela o submit
        try {
            const formData = new FormData();
            formData.append('imagem', foto.imagem);
            await axios.post(`http://127.0.0.1:8000/api/upload/2`, formData);
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
                        src="https://avatars.githubusercontent.com/u/88936386?v=4"
                        alt="Imagem do perfil"
                        className="img-fluid rounded-circle align-self-start"
                        style={{ maxWidth: "100px", marginTop: '-7.125rem', marginLeft: '2rem' }}
                    />

                    <div className={`col-md-6 ${styles.cameraIconProfile}`}>
                        <label htmlFor="selecao-arquivo">
                            <span className="material-symbols-outlined">photo_camera</span>
                            <input id='selecao-arquivo' name='imagem' type='file' 
                            // value={foto.imagem.name || ''}
                            onChange={(e) => {
                                const selectedFile = e.target.files?.[0];
                                if (selectedFile) {
                                    setFoto({ ...foto, imagem: selectedFile });
                                }
                            }}
                            />
                        </label>
                    </div>

                    
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Nome</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Nome" value={"André Nery"} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="sr-only">Usuário</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <div className="input-group-text">@</div>
                                </div>
                                <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Usuário" disabled 
                                value={"andrenery"}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group mt-4">
                        <label>Bio</label>
                        <input type="text" className="form-control" id="inputBio" placeholder="Bio" value={"Amante de livros de romance e ficção ciêntifica"} />
                    </div>

                    <div className="form-group mt-4">
                        <label>Lista de desejos</label>
                        <input type="text" className="form-control" id="inputListaDesejos" placeholder="Lista de desejos" value={"amazon.kindle/neryandre"} />
                    </div>

                    <div className="row mt-4">
                        <div className="form-group col-md-6">
                            <label>Data de nascimento</label>
                            <input type="date" className="form-control" id="inputNascimento" placeholder="Dasta de nascimento" value={"1999-06-02"} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Telefone</label>
                            <input type="text" className="form-control" id="inputTelefone" placeholder="Telefone" value={"(13) 99100-0000"} />
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