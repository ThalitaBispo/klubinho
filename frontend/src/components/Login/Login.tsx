import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export function Login() {






    
    return(
        <>
            <div className={styles.conteudo}>
                <p className={styles.message}>
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
                <div className="form-group">
                    <label htmlFor='emailInput'>Entre com o seu e-mail</label>
                    <input 
                        type='text' 
                        id='emailInput' 
                        placeholder='e-mail'
                        className="form-control"
                        required>
                    </input>
                </div>
                
                <div className="form-group">
                    <label htmlFor='passInput'>Entre com a sua senha</label>
                    <input 
                        type='password' 
                        id='passInput' 
                        placeholder='senha'
                        className="form-control"
                        required>
                    </input>
                </div>
                <p><a>Esqueceu a senha?</a></p>
                
                <div className={styles.centerButton}>
                    <button type='submit' className="btn btn-lg btn-block" onClick={() => { window.location.href = `bemvindo`; } }>Entrar</button>
                </div>
                
            </form>
        </>
    )
}