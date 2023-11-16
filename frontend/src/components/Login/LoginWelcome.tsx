import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from './Login.module.css';

export function LoginWelcome() {

    // resgatar o nome do usuário pelo back usando o id do cookie:
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

      

    return(
        <>

        <p className={styles.textLogin}>Seja bem-vindo(a) <span className={styles.textDestaque}>{usuario.user_name}</span> ao <span className={styles.textDestaque}>Klubinho</span></p>

        <div className={styles.centerButton}>             
            <button type="button" className="btn btn-lg btn-block" onClick={() => { window.location.href = `criarclube`; } }>Criar Clube</button>
        </div>
        <div className={styles.centerButton}>   
            <button type="button" className="btn btn-lg btn-block" onClick={() => { window.location.href = `pesquisarclube`; } }>Participar de Clube</button>
        </div>
        </>
    )
}