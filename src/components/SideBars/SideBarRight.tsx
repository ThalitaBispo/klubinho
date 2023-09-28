import styles from './SideBarRight.module.css'

export function SideBarRight() {
    return(
        <>
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
        </>
    )
} 