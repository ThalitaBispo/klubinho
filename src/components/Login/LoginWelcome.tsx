import styles from './Login.module.css'

export function LoginWelcome() {
    return(
        <>

        <p className={styles.textLogin}>Seja bem-vindo(a) Usuário ao <span className={styles.textDestaque}>Klubinho</span></p>

        <div className={styles.centerButton}> 
            <a href="/criarclube">    
                <button type='submit'>Criar Clube</button>
            </a>
          
            <a href="/entrarclube">
                <button type='submit'>Participar de Clube</button>
            </a>
        </div>
        </>
    )
}