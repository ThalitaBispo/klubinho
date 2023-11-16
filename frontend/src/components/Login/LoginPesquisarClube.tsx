import styles from './Login.module.css'
import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export function LoginPesquisarClube() {


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

    
    const [clube, setClube] = useState({
        nick_club: '', // Valor padrão para 'nick_club'
    });
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    async function buscar(e) {
        e.preventDefault();

        const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        };

        try {
            const response = await axios.get(
              `http://127.0.0.1:8000/api/club/getClubByNickClub/${clube.nick_club}`,
              config
            );
          
            // Verifique se há pelo menos um clube na resposta
            if (response.data.length > 0) {
              const club = response.data[0];
              console.log(club)
          
              // Agora, você pode acessar o id do clube
              const club_id = club.id;
              console.log(club_id)
              const club_name = club.name;
              console.log(club_name)
          
              Cookies.set('temp_club_id', club_id, { expires: 7 });              
              Cookies.set('club_name', club_name, { expires: 7 });
          
              setStatus('clube encontrado');
              alert('Clube encontrado com sucesso!');
              setClube({});
          
              // Redireciona para a página desejada
              navigate('/entrarclube');
            } else {
              // Lida com o caso em que nenhum clube é encontrado
              setStatus('Nenhum clube encontrado');
              alert('Nenhum clube encontrado');
            }
          } catch (error) {
            setStatus('Nenhum clube encontrado');
            alert('Nenhum clube encontrado');
          }
    }
    return(
        <>
            <div className={styles.welcome}>
                    <p>
                        <span>Bem-vindo(a) </span>
                        <span className={styles.textDestaque}>{usuario.user_name}</span>
                    </p>

                </div>

                <p className={styles.textLogin}>
                    Faça parte de um clube!
                </p>

                <form onSubmit={buscar} className={styles.loginForm}>
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
                            value={clube.nick_club || ''}
                            className='form-control'
                            onChange={(e) => setClube({...clube, nick_club:e.target.value})}
                            required/>    
                    </div>

                    <p><a href='/criarclube'>Criar Novo Clube</a></p>
                    
                    <div className={styles.centerButton}>
                        <button type="submit" className="btn btn-lg btn-block">Pesquisar</button>
                    </div>
                </form>
        </>
    )
}