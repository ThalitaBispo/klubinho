import styles from './SideBarLeft.module.css'

export function SideBarRight() {
    return(
        <>
            <div className='container mx-auto d-flex justify-content-center align-items-center'>
                <nav className="navbar navbar-expand-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className={`navbar-nav flex-column ${styles.menu}`}>
                            <span  className={styles.logo}>KLUBINHO</span>

                            <li className={`nav-item ${styles.menuItem}`}>
                                <a className="nav-link d-flex flex-row mb-2" href="#">
                                    <span className="material-symbols-outlined">home</span>
                                    <span className='p-2'>Home</span>
                                </a>
                            </li>

                            <li className={`nav-item ${styles.menuItem}`}>
                                <a className="nav-link d-flex flex-row mb-2" href="#">
                                    <span className="material-symbols-outlined">voting_chip</span>
                                    <span className='p-2'>Enquete</span>
                                </a>
                            </li>
                            
                            <li className={`nav-item ${styles.menuItem}`}>
                                <a className="nav-link d-flex flex-row mb-2" href="#">
                                    <span className="material-symbols-outlined">article</span>
                                    <span className='p-2'>Reunião</span>
                                </a>
                            </li>

                            <li className={`nav-item ${styles.menuItem}`}>
                                <a className="nav-link d-flex flex-row mb-2" href="#">
                                    <span className="material-symbols-outlined">person</span>
                                    <span className='p-2'>Perfil</span>
                                </a>
                            </li>

                            <li className={`nav-item d-flex ${styles.menuItem}`}>
                                <a className="nav-link d-flex flex-row" href="#">
                                    <span className="material-symbols-outlined">menu_book</span>
                                    <span className='p-2'>Clube do livro</span>
                                </a>
                            </li>

                            <li className={`nav-item d-flex ${styles.userProfile}`}>
                                <a className="nav-link d-flex flex-row mt-4" href="#">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/88936386?v=4"
                                        alt="Imagem do perfil"
                                        className="img-fluid rounded-circle align-self-start"
                                        style={{ maxWidth: "70px"}}
                                    />
                                    <div className="mt-3" style={{marginLeft: '1rem'}}>
                                        <div className="d-block">André Nery</div>
                                        <div className="d-block">Clube dos ++</div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav> 
            </div>
        </>
    )
} 