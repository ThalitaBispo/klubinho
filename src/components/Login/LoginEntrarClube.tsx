import styles from './Login.module.css'

export function LoginEntrarClube() {
    return(
        <>
            <div className={styles.welcome}>
                    <p>
                        <span>Bem-vindo(a) </span>
                        <span className={styles.textDestaque}>Usuário</span>
                    </p>

                </div>

                <p className={styles.textLogin}>
                    Faça parte de um clube!
                </p>

                <form action="" className={styles.loginForm}>
                    <p>Digite o nome do clube</p>
                    <input type='text' placeholder='Klubinho'></input>

                    <p>Digite o código do clube</p>
                    <input type='text' placeholder='Código'></input>

                    <p><a href='/criarclube'>Criar Novo Clube</a></p>
                    
                    <div className={styles.centerButton}>
                        <button type='submit'>Entrar</button>
                    </div>
                </form>
        </>
    )
}