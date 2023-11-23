import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from './Login.module.css';

export function LoginEntrarClube() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    user_id: Cookies.get('user_id'),
    user_name: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/user/getUser/${usuario.user_id}`);
        const firstUserName = response.data.length > 0 ? response.data[0].name : '';
        setUsuario((prevUsuario) => ({ ...prevUsuario, user_name: firstUserName }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [usuario.user_id]);

  const club_name = Cookies.get('club_name');

  const [status, setStatus] = useState('');

  async function gravar(e) {
    e.preventDefault();

    const entrar = {
      user_id: Cookies.get('user_id'),
      club_id: Cookies.get('temp_club_id'),
      role: 'user',
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/clubIntegrantes/create',
        {
          user_id: entrar.user_id,
          club_id: entrar.club_id,
          role: 'user',
        },
        config
      );

      console.log(response);

      setStatus('clube ingressado com sucesso');
      alert('Clube ingressado com sucesso! Faça login com sua nova conta para acessá-lo!');
      Cookies.set('club_id', entrar.club_id, { expires: 7 });
      Cookies.remove('temp_club_id');
      // Redireciona para a página desejada
      navigate('/');
    } catch (error) {
      setStatus(`Falha: ${error}`);
      alert(`Falha: ${error}`);
    }
  }

  return (
    <>
      <div className={styles.welcome}>
        <p>
          <span>Bem-vindo(a) </span>
          <span className={styles.textDestaque}>{usuario.user_name}</span>
        </p>
      </div>

      <p className={styles.textLogin}>
        Deseja entrar em <span className={styles.textDestaque}>{club_name}</span>?
      </p>

      {/* <p>
        <a href='/bemvindo'>Voltar</a>
      </p> */}

      <div className={styles.centerButton}>
        <button type="button" onClick={gravar} className="btn btn-lg btn-block">
          Entrar
        </button>
      </div>

      <div className={styles.centerButton}>             
            <button type="button" className="btn btn-lg btn-block" onClick={() => { window.location.href = `bemvindo`; } }>Voltar</button>
        </div>
    </>
  );
}
