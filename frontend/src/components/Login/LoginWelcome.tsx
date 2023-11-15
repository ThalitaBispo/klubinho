import styles from './Login.module.css'

export function LoginWelcome() {
    return(
        <>

        <p className={styles.textLogin}>Seja bem-vindo(a) Usuário ao <span className={styles.textDestaque}>Klubinho</span></p>

        <div className={styles.centerButton}>             
            <button type="button" className="btn btn-lg btn-block" onClick={() => { window.location.href = `criarclube`; } }>Criar Clube</button>
        </div>
        <div className={styles.centerButton}>   
            <button type="button" className="btn btn-lg btn-block" onClick={() => { window.location.href = `pesquisarclube`; } }>Participar de Clube</button>
        </div>
        </>
    )
}