import styles from './Login.module.css'

export function LoginWelcome() {
    return(
        <>

        <p className={styles.textLogin}>Seja bem-vindo(a) Usuário ao <span className={styles.textDestaque}>Klubinho</span></p>

        <div> 
            <a href="/criarclube">    
                <button className={styles.botao} type='submit'>Criar Clube</button>
            </a>
            <a href="/entrarclube">
                <button className={styles.botao} type='submit'>Participar de Clube</button>
            </a>
        </div>
        </>
    )
}