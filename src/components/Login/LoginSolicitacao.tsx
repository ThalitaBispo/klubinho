import styles from './Login.module.css'

export function LoginSolicitacao() {
    return(
        <>
        <div className={styles.welcome}>
                    <p>
                        <span>Bem-vindo(a) </span>
                        <span>Usuário</span>
                    </p>

                </div>

        <p className={styles.textCentral}>Sua solicitação foi enviada! </p>
        <p className={styles.subtextCentral}>Aguarde um administrador liberar sua entrada </p>

        <div> 
            <a href="/">    
                <button className={styles.botao} type='submit'>Entrar</button>
            </a>
           
        </div>
        </>
    )
}