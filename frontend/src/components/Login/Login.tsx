import { Link } from 'react-router-dom'
import styles from './Login.module.css'

export function Login() {
    return(
        <>
            <div className={styles.welcome}>
                <p>
                    <span>Bem-vindo(a) ao </span>
                    <span className={styles.textDestaque}>Klubinho</span>
                </p>

                <p>
                    <p>Sem conta?</p>
                    <p className={styles.textDestaque}><Link to="/cadastro">Cadastre-se</Link></p>
                </p>

            </div>

            <p className={styles.textLogin}>Login</p>

            <form action="" className={styles.loginForm}>
                <p>Entre com o seu e-mail</p>
                <input type='text' placeholder='e-mail'></input>

                <p>Entre com a sua senha</p>
                <input type='text' placeholder='senha'></input>

                <p><a>Esqueceu a senha?</a></p>
                
                <div className={styles.centerButton}>
                    <button type='submit'>Entrar</button>
                </div>
                
            </form>
        </>
    )
}