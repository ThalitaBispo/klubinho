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

        {/* <form onSubmit={gravar} className={styles.loginForm}> */}
        <form onSubmit={gravar} className={styles.loginForm}>
          <div className="form-group">
            <label for = "inputEmail">Informe seu email</label>
            <input 
                name='email'
                id ='inputEmail'
                placeholder='E-mail' 
                value={cadastro.email || ''}
                className="form-control"
                onChange={(e) => setCadastro({...cadastro, email:e.target.value})}
                required/>
          </div>
          <div className="form-row">
              <div className="col-md-6">
                <div class="form-group">
                  <label for= "nameInput">Nome</label>
                  <input 
                      name='name'
                      type='text' 
                      id='nameInput'
                      placeholder='Nome' 
                      value={cadastro.name || ''}
                      className='form-control'
                      onChange={(e) => setCadastro({...cadastro, name:e.target.value})}
                      required/>
                </div>
              </div>
              
              <div className="col-md-6">
                <div class="form-group">
                  <label for="lastnameInput">Sobrenome</label>
                  <input 
                      name='last_name'
                      type='text'
                      id='lastnameInput' 
                      placeholder='Sobrenome' 
                      value={cadastro.last_name || ''}
                      className="form-control"
                      onChange={(e) => setCadastro({...cadastro, last_name:e.target.value})}
                      required/>
                </div>
              </div>
          </div>
          <div className="form-group">
            <label for="telInput">Telefone</label>
            <input 
                name='phone_number'
                type='text'
                id='telInput' 
                placeholder='Nº de celular' 
                value={cadastro.phone_number || ''}
                className='form-control'
                onChange={(e) => setCadastro({...cadastro, phone_number:e.target.value})}
                required/>    
          </div>
          <div className="form-group">
            <label for='passwordInput'>Informe sua senha</label>
            <input 
                name='password'
                type='password' 
                placeholder='Senha'
                id='passwordInput'
                value={cadastro.password || ''}
                className='form-control'
                onChange={(e) => setCadastro({...cadastro, password:e.target.value})}
                required/>
          </div>                   

          <div className={styles.centerButton}>
            <button type="submit" className="btn btn-lg btn-block">Cadastrar</button>
          </div>
        </form>
        </>
    )
}