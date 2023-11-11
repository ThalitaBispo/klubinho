import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export function Login() {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const [status, setStatus] = useState('');

    async function gravar(e) {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try{
            const response = await axios.post(
                'http://127.0.0.1:8000/api/login',
                {
                    email: login.email,
                    password: login.password
                },
                config
            );
             // Aqui você pode verificar se a resposta contém o token
            const { token, user } = response.data;

            // Armazene o token no cookie
            Cookies.set('token', token, { expires: 7 });

            // Armazene o id do usuário no cookie
            Cookies.set('userId', user.id, { expires: 7 });

            setStatus('Login feito com sucesso');
            setLogin({}); 
            
            //Atualiza a pagina para o App.tsx verificar a presença do token
            window.location.reload()

        } catch (error) {
            setStatus(`Falha: ${error}`);
            alert(`Usuário ou senha inválidos.`);        
        }
    }
    
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

            <form onSubmit={gravar} className={styles.loginForm}>
                <div className="form-group">
                    <label htmlFor='emailInput'>Entre com o seu e-mail</label>
                    <input 
                        type='text' 
                        id='emailInput' 
                        placeholder='e-mail'
                        value={login.email || ''}
                        className="form-control"
                        onChange={(e) => setLogin({...login, email:e.target.value})}
                        required>
                    </input>
                </div>
                
                <div className="form-group">
                    <label htmlFor='passInput'>Entre com a sua senha</label>
                    <input 
                        type='password' 
                        id='passInput' 
                        placeholder='senha'
                        value={login.password || ''}
                        className="form-control"
                        onChange={(e) => setLogin({...login, password:e.target.value})}
                        required>
                    </input>
                </div>
                <p><a>Esqueceu a senha?</a></p>
                
                <div className={styles.centerButton}>
                    <button type='submit' className="btn btn-lg btn-block">Entrar</button>
                </div>
                
            </form>
        </>
    )
}