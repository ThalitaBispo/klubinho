import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from './Login.module.css';

export function LoginCriarClube() {

    const [cadastro, setCadastro] = useState({
        name: '', // Valor padrão para 'name'
        nick_club: '', // Valor padrão para 'nick_club'
    });
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    // Recupere o id do usuário do cookie
    
    const user_id = Cookies.get('user_id');
    console.log('ID do usuário:', user_id);

    async function gravar(e) {
        e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/club/register',
        {
          name: cadastro.name,
          nick_club: cadastro.nick_club,
          user_id: user_id, // Adicione o userId ao corpo da solicitação
        },
        config
      );
      
      console.log(response);

      setStatus('clube criado');
      alert('Clube criado com sucesso!');
      setCadastro({});

      // Redireciona para a página desejada
      navigate('/');
    } catch (error) {
      setStatus(`Falha: ${error}`);
      alert(`Falha: ${error}`);
    }
  }

    return(
        <>
            <div className={styles.welcome}>
                    <p>
                        <span>Bem-vindo(a) </span>
                        <span className={styles.textDestaque} >Usuário</span>
                    </p>

                </div>

                <p className={styles.textLogin}>Crie um Clube</p>

                <form onSubmit={gravar} className={styles.loginForm}>
                    <div className="form-group">
                        <label htmlFor='clubeInput'>Nome do Clube</label>
                        <input 
                            type='text' 
                            id='clubeInput'
                            placeholder='Nome do Clube'
                            value={cadastro.name || ''}
                            className='form-control'
                            onChange={(e) => setCadastro({...cadastro, name:e.target.value})}
                      required/>                        
                    </div>
                    <div className="form-group">
                        <label htmlFor='endClube'>Endereço do Clube</label>
                        <input 
                            type='text' 
                            id='endClube'
                            placeholder='@klubinho'
                            value={cadastro.nick_club || ''}
                            className='form-control'
                            onChange={(e) => setCadastro({...cadastro, nick_club:e.target.value})}
                            required/>                        
                    </div>
                    <p><a href='/pesquisarclube'>Buscar Clube Existente</a></p>
                    
                    <div className={styles.centerButton}>
                        <button type="submit" className="btn btn-lg btn-block">Criar Clube</button>
                    </div>
                </form>
        </>
    )
}