import styles from './Login.module.css'

export function LoginSolicitacao() {
    return(
        <>
        <div className={styles.welcome}>
                    <p>
                        <span>Bem-vindo(a) </span>
                        <span className={styles.textDestaque}>Usuário</span>
                    </p>

                </div>

        <p className={styles.textCentral}>Sua solicitação foi enviada! </p>
        <p className={styles.subtextCentral}>Aguarde um administrador liberar sua entrada </p>

        <div className={styles.centerButton}>
            <button className="btn btn-lg btn-block" type='submit' onClick={() => { window.location.href = `/`; } }>Entrar</button>                       
        </div>
        
        </>
    )
}