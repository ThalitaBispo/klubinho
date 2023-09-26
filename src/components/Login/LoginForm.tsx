import { Link } from 'react-router-dom'
import styles from './Login.module.css'

export function LoginForm() {
    return(
        <>
            <div className={styles.conteudo}>
                    <p>
                        <span>Bem-vindo(a) ao </span>
                        <span className={styles.textDestaque}>Klubinho</span>
                    </p>

                    <p>
                        <p>Tem uma conta?</p>
                        <p className={styles.textDestaque}><Link to="/">Entre</Link></p>
                    </p>

                </div>

                <p className={styles.textLogin}>Cadastro</p>

                <form action="" className={styles.loginForm}>
                    <p>Informe seu email</p>
                    <input type='text' placeholder='E-mail'></input>

                    <p>Nome</p>
                    <input type='text' placeholder='Nome'></input>

                    <p>Sobrenome</p>
                    <input type='text' placeholder='Nome'></input>

                    <p>Telefone</p>
                    <input type='text' placeholder='Nome'></input>      

                    <p>Informe sua senha</p>
                    <input type='text' placeholder='Nome'></input>                    

                    <div className={styles.centerButton}>
                    <button type='submit'>Cadastrar</button>
                    </div>
                </form>
        </>
    )
}