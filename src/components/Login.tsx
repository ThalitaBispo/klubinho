import styles from './Login.module.css'


export function Login() {
    return (
    <>
        <div className={styles.container}>
            <span className={styles.textLogo}>KLUBINHO</span>

            <div className={styles.login}>
                <div className={styles.welcome}>
                    <p>
                        <span>Bem-vindo(a) ao </span>
                        <span>Klubinho</span>
                    </p>

                    <p>
                        <p>Sem conta?</p>
                        <p><a>cadastre-se</a></p>
                    </p>

                </div>

                <p className={styles.textLogin}>Login</p>

                <form action="" className={styles.loginForm}>
                    <p>Entre com o seu e-mail</p>
                    <input type='text' placeholder='e-mail'></input>

                    <p>Entre com a sua senha</p>
                    <input type='text' placeholder='senha'></input>

                    <p><a>Esqueceu a senha?</a></p>

                    <button type='submit'>Entrar</button>
                </form>
            </div>
        </div> 
    </>
    )
} 