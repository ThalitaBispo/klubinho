import styles from './SideBarLeft.module.css'

export function SideBarLeft() {
    return(
        <>

            <div className={styles.container}>
                <div className={styles.search}>
                    <span className="material-symbols-outlined">search</span>
                    <input type='text' placeholder='Pesquisar no Klubinho'></input>
                </div>

                <div className={styles.blockSideBarLeft}>
                    <span>Agenda</span>
                    <span>Acessar agenda</span>
                </div>

                <div className={styles.blockSideBarLeft}>
                    <span>Integrantes</span>
                    <span>Adicionar integrante</span>
                </div>
            </div>
        </>
    )
}