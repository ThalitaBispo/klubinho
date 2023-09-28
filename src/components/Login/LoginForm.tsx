import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export function LoginForm() {

    const [cadastro, setCadastro] = useState({
        name: '', // Valor padrão para 'name'
        last_name: '', // Valor padrão para 'last_name'
        email: '', // Valor padrão para 'email'
        phone_number: '', // Valor padrão para 'phone_number'
        password: '', // Valor padrão para 'password'
    });
    const [status, setStatus] = useState('');

  async function gravar(e) {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/register',
        {
          name: cadastro.name,
          last_name: cadastro.last_name,
          email: cadastro.email,
          phone_number: cadastro.phone_number,
          password: cadastro.password
        },
        config
      );

      setStatus('Usuário cadastrado com sucesso!');
      alert('Usuário cadastrado com sucesso!');
      setCadastro({});
    } catch (error) {
      setStatus(`Falha: ${error}`);
      alert(`Falha: ${error}`);
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
                <p>Tem uma conta?</p>
                <p className={styles.textDestaque}><Link to="/">Entre</Link></p>
            </p>

        </div>

        <p className={styles.textLogin}>Cadastro</p>

        <form onSubmit={gravar} className={styles.loginForm}>
            <p>Informe seu email</p>
            <input 
                name='email' 
                type='text' 
                placeholder='E-mail' 
                value={cadastro.email || ''}
                onChange={(e) => setCadastro({...cadastro, email:e.target.value})}
                required/>
            

            <div className={styles.conteudo}>
                <div className={styles.inputDuplo}>
                    <p>Nome</p>
                    <input 
                        name='name'
                        type='text' 
                        placeholder='Nome' 
                        value={cadastro.name || ''}
                        onChange={(e) => setCadastro({...cadastro, name:e.target.value})}
                        required/>
                </div>
                
                <div className={styles.inputDuplo}>
                    <p>Sobrenome</p>
                    <input 
                        name='last_name'
                        type='text' 
                        placeholder='Sobrenome' 
                        value={cadastro.last_name || ''}
                        onChange={(e) => setCadastro({...cadastro, last_name:e.target.value})}
                        required/>
                </div>
            </div>

            <p>Telefone</p>
            <input 
                name='phone_number'
                type='text' 
                placeholder='Nº de celular' 
                value={cadastro.phone_number || ''}
                onChange={(e) => setCadastro({...cadastro, phone_number:e.target.value})}
                required/>    

            <p>Informe sua senha</p>
            <input 
                name='password'
                type='password' 
                placeholder='Senha' 
                value={cadastro.password || ''}
                onChange={(e) => setCadastro({...cadastro, password:e.target.value})}
                required/>                   

            <div className={styles.centerButton}>
                <Link to='/bemvindo'>
                    <button type='submit'>Cadastrar</button>
                </Link>
            </div>
        </form>
        </>
    )
}