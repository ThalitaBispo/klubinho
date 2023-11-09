import styles from './Login.module.css'

export function LoginCriarClube() {
    return(
        <>
            <div className={styles.welcome}>
                    <p>
                        <span>Bem-vindo(a) </span>
                        <span className={styles.textDestaque} >Usuário</span>
                    </p>

                </div>

                <p className={styles.textLogin}>Crie um Clube</p>

                <form action="" className={styles.loginForm}>
                    <div className="form-group">
                        <label for='clubeInput'>Nome do Clube</label>
                        <input 
                            type='text' 
                            id='clubeInput'
                            placeholder='Nome do Clube'
                            className="form-control"
                            required>
                        </input>
                    </div>
                    <div className="form-group">
                        <p>Endereço do Clube</p>
                        <input 
                            type='text' 
                            id='endClubeInput'
                            placeholder='@klubinho'
                            className="form-control"
                            required>                        
                        </input>
                    </div>
                    <p><a href='/entrarclube'>Buscar Clube Existente</a></p>
                    
                    <div className={styles.centerButton}>
                        <button type="submit" className="btn btn-lg btn-block">Criar Clube</button>
                    </div>
                </form>
        </>
    )
}