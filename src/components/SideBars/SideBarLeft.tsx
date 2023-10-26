import styles from './SideBarLeft.module.css'

export function SideBarRight() {
    return(
        /*<>
            <div className={styles.container}>
                
                <span  className={styles.logo}>KLUBINHO</span>

                <div className={styles.menu}>
                    <div className={styles.menuItem}>
                        <span className="material-symbols-outlined">home</span>
                        <span>Home</span>
                    </div>

                    <div className={styles.menuItem}>
                        <span className="material-symbols-outlined">voting_chip</span>
                        <span>Enquete</span>
                    </div>
                    <div className={styles.menuItem}>
                    <span className="material-symbols-outlined">article</span>
                        <span>Reunião</span>
                    </div>
                    <div className={styles.menuItem}>
                        <span className="material-symbols-outlined">person</span>
                        <span>Perfil</span>
                    </div>
                    <div className={styles.menuItem}>
                        <span className="material-symbols-outlined">menu_book</span>
                        <span>Clube do livro</span>
                    </div>
                </div>
            </div>

            <div className={styles.userProfile}>
                <div className={styles.userProfileColumn}>
                    <img src="https://avatars.githubusercontent.com/u/88936386?v=4"/>
                    <div className={styles.userName}>
                        <span>André Nery</span>
                        <span>Clube dos ++</span>
                    </div>
                </div>
            </div>
        </>*/

        <>
            <div className='container mx-auto' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <nav className="navbar navbar-expand-md navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className={`navbar-nav flex-column ${styles.menu}`}>
                            <span  className={styles.logo}>KLUBINHO</span>

                            <li className={`nav-item d-flex flex-row ${styles.menuItem}`}>
                                <a className="nav-link" href="#">
                                    <span className="material-symbols-outlined p-2">home</span>
                                    <span className='p-2'>Home</span>
                                </a>
                            </li>

                            <li className={`nav-item d-flex align-items-center ${styles.menuItem}`}>
                                <a className="nav-link" href="#">
                                    <span className="material-symbols-outlined">voting_chip</span>
                                    <span>Enquete</span>
                                </a>
                            </li>
                            
                            <li className={`nav-item d-flex align-items-center ${styles.menuItem}`}>
                                <a className="nav-link" href="#">
                                    <span className="material-symbols-outlined">article</span>
                                    <span>Reunião</span>
                                </a>
                            </li>

                            <li className={`nav-item d-flex align-items-center ${styles.menuItem}`}>
                                <a className="nav-link" href="#">
                                    <span className="material-symbols-outlined">person</span>
                                    <span>Perfil</span>
                                </a>
                            </li>

                            <li className={`nav-item d-flex align-items-center ${styles.menuItem}`}>
                                <a className="nav-link" href="#">
                                    <span className="material-symbols-outlined">menu_book</span>
                                    <span>Clube do livro</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav> 
            </div>
        </>
    )
} 