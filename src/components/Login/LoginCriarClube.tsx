import styles from './Login.module.css'

export function LoginCriarClube() {
    return(
        <>
            <div className={styles.welcome}>
                    <p>
                        <span>Bem-vindo(a) </span>
                        <span>Usuário</span>
                    </p>

                </div>

                <p className={styles.textLogin}>Crie um Clube</p>

                <form action="" className={styles.loginForm}>
                    <p>Nome do Clube</p>
                    <input type='text' placeholder='Nome do Clube'></input>

                    <p>Desrição</p>
                    <input type='text' placeholder='Descrição'></input>

                    <p><a href='/entrarclube'>Buscar Clube Existente</a></p>
                    
                    <button type='submit'>Criar Clube</button>
                    
                </form>
        </>
    )
}