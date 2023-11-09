import { Link } from 'react-router-dom'
import styles from './Login.module.css'

export function LoginForm() {
    return(
        <>
        <div className={styles.conteudo}>
            <p className={styles.message}>
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

            <div className={styles.conteudo}>
                <div className={styles.inputDuplo}>
                    <p>Nome</p>
                    <input type='text' placeholder='Nome' />
                </div>
                
                <div className={styles.inputDuplo}>
                    <p>Sobrenome</p>
                    <input type='text' placeholder='Sobrenome' />
                </div>
            </div>

            <p>Telefone</p>
            <input type='text' placeholder='Nº de celular'></input>      

            <p>Informe sua senha</p>
            <input type='text' placeholder='Senha'></input>                    

            <div className={styles.centerButton}>
            <button type='submit'>Cadastrar</button>
            </div>
        </form>
        </>
    )
}