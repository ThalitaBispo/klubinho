//import styles from './SideBarRight.module.css'
import styles from '../../global.module.css'

export function SideBarLeft() {
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
                        <span style={{marginLeft: '10px'}}>(10)</span>

                        <div className='d-flex flex-row' style={{ marginTop: '1.25rem'}}>
                            <img
                                src="https://avatars.githubusercontent.com/u/88936386?v=4"
                                alt="Imagem do perfil"
                                className="img-fluid rounded-circle align-self-start"
                                style={{ maxWidth: "40px"}}
                            />
                            <div className="mt-2" style={{marginLeft: '0.5rem'}}>
                                <div className="d-block">André Nery</div>
                            </div>
                        </div>
                        
                        <div className='d-flex flex-row mt-4'>
                            <img
                                src="https://avatars.githubusercontent.com/u/22156239?v=4"
                                alt="Imagem do perfil"
                                className="img-fluid rounded-circle align-self-start"
                                style={{ maxWidth: "40px"}}
                            />
                            <div className="mt-2" style={{marginLeft: '0.5rem'}}>
                                <div className="d-block">Kauã Duarte</div>
                            </div>
                        </div>   

                        <div className='d-flex flex-row mt-4'>
                            <img
                                src="https://avatars.githubusercontent.com/u/74025683?v=4"
                                alt="Imagem do perfil"
                                className="img-fluid rounded-circle align-self-start"
                                style={{ maxWidth: "40px"}}
                            />
                            <div className="mt-2" style={{marginLeft: '0.5rem'}}>
                                <div className="d-block">Alex Sander Meneses Santos</div>
                            </div>
                        </div>

                        <div className='d-flex flex-row mt-4'>
                            <img
                                src="https://i.pinimg.com/564x/dd/3e/6c/dd3e6c0848e2e3e4512096bcbbe64964.jpg"
                                alt="Imagem do perfil"
                                className="img-fluid rounded-circle align-self-start"
                                style={{ maxWidth: "40px"}}
                            />
                            <div className="mt-2" style={{marginLeft: '0.5rem'}}>
                                <div className="d-block">Beyoncé</div>
                            </div>
                        </div>

                    </div>
                    <div className="card-footer text-muted">
                        <a href="#" className={`nav-link ${styles.fontPurple}`}>Mostrar mais</a>
                    </div>
                </div>
            </div>
        </>
    )
}