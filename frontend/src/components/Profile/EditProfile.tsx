import { Link } from 'react-router-dom'
import styles from './EditProfile.module.css'

export function EditProfile() {
    return (
        <>
            <div className="container">

                <img 
                    src="https://i.pinimg.com/564x/7f/06/16/7f06166fd703e6549ae9baea4a5c7519.jpg"
                    alt="Imagem"
                    className="img-fluid mt-3"
                    style={{ width: "800px", height: '300px', objectFit: 'cover'}}
                />
                
                <div className={`col-md-6 ${styles.cameraIcon}`}>
                    <label htmlFor="selecao-arquivo">
                        <span className="material-symbols-outlined">photo_camera</span>
                        <input id='selecao-arquivo' style={{ display: 'none' }} type='file' />
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
                        <input id='selecao-arquivo' style={{ display: 'none' }} type='file' />
                    </label>
                </div>

                <form style={{ marginBottom: "3rem" }}>
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
    )
}