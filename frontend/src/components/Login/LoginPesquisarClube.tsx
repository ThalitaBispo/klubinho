import styles from './Login.module.css'

export function LoginPesquisarClube() {
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
                    {/* <div className="form-group">
                        <label htmlFor='clubeInput'>Digite o nome do clube</label>
                        <input 
                            type='text' 
                            id='clubeInput'
                            placeholder='Klubinho'
                            className="form-control">
                        </input>
                    </div> */}
                    
                    <div className="form-group">
                        <label htmlFor='codeInput'>Digite o apelido do clube</label>
                        <input 
                            type='text' 
                            id='codeInput'
                            placeholder='klubinho'
                            className="form-control">
                        </input>
                    </div>

                    <p><a href='/criarclube'>Criar Novo Clube</a></p>
                    
                    <div className={styles.centerButton}>
                        <button type="submit" className="btn btn-lg btn-block">Pesquisar</button>
                    </div>
                </form>
        </>
    )
}