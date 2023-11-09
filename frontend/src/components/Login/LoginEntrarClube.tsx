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
                    <div className="form-group">
                        <label for='clubeInput'>Digite o nome do clube</label>
                        <input 
                            type='text' 
                            id='clubeInput'
                            placeholder='Klubinho'
                            className="form-control">
                        </input>
                    </div>
                    
                    <div className="form-group">
                        <label for='codeInput'>Digite o código do clube</label>
                        <input 
                            type='text' 
                            id='codeInput'
                            placeholder='Código'
                            className="form-control">
                        </input>
                    </div>

                    <p><a href='/criarclube'>Criar Novo Clube</a></p>
                    
                    <div className={styles.centerButton}>
                        <button type="submit" className="btn btn-lg btn-block">Entrar</button>
                    </div>
                </form>
        </>
    )
}