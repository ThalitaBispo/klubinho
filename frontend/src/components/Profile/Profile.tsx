import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../avatar/logo.jpeg';

export function Profile() {
    
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(true);
    const [postagem, setPostagem] = useState({});
    const [loadingPostagens, setLoadingPostagens] = useState(false);
    const [postagens, setPostagens] = useState([]);
    const user_id = Cookies.get('user_id');

    useEffect(() => {
        async function Profile() {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/api/user/getUser/${user_id}`);
            setProfile(response.data);
            setLoading(false);
          } catch (error) {
            console.error(error);
          }
        }
    
        Profile();
      }, []);

      const fetchPostagens = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/post/getAllPostByUser/${user_id}`);
          setPostagens(response.data);
          setLoadingPostagens(false);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        fetchPostagens();
      }, []);

      //http://127.0.0.1:8000/api/post/getAllPostByUser/1

    return(
        <>
            {profile.map((profiles) => (
                <div key={profiles.id} className="container">
                    <img 
                    src="https://i.pinimg.com/564x/7f/06/16/7f06166fd703e6549ae9baea4a5c7519.jpg"
                    alt="Imagem"
                    className="img-fluid mt-3"
                    style={{ width: "800px", height: '300px', objectFit: 'cover'}}
                    />

                    <img
                    src={
                        profiles.imagem
                        ? `http://127.0.0.1:8000/api/user/getImage/${user_id}`
                        : logo
                    }
                    alt="Imagem do perfil"
                    className="img-fluid rounded-circle align-self-start"
                    style={{ maxWidth: "100px", marginTop: '-3.125rem', marginLeft: '2rem' }}
                />

                <Link to={"/editprofile"}>
                    <span className="material-symbols-outlined mt-2" style={{ color: 'var(--purple)', float: 'right', 
                    border: '1px solid var(--purple)', borderRadius: '10px', padding: '0.25rem', fontSize: '1.25rem' }}>edit</span>
                </Link>

                
                <div className="text-justify mt-4">
                    <p>
                            <b style={{ fontSize: '1.5rem' }}>{profiles.name} {profiles.last_name}</b>
                        </p>
                        <p style={{ marginTop: '-1rem' }}>
                            <span>
                            {profiles.bio}
                            </span>
                        </p>
                        <p style={{ marginTop: '-0.6rem' }}>
                            <span className="material-symbols-outlined" style={{ color: '#c2c2c2' }}>link</span>
                            <a href="#" style={{ marginLeft: '0.5rem' }}>amazon.kindle/{profiles.name}</a>
                        </p>
                </div>

                <div style={{ marginTop: '3rem' }}>
                    <b style={{ fontSize: '1.25rem' }}>Publicações</b>
                </div>

            <hr style={{ borderTop: '1px solid gray', marginTop: '2rem' }} />

            {loadingPostagens ? (
          <p>Carregando postagens...</p>
        ) : (
          postagens.map((post) => (
            <div style={{ margin: '1rem' }} key={post.id}>
              <div className="d-flex mt-2">
                <a href="#" className="nav-link d-flex flex-row mt-4">
                  <img
                    src={
                        post.imagem
                        ? `http://127.0.0.1:8000/api/user/getImage/${post.user_id}`
                        : logo
                    }
                    alt="Imagem do perfil"
                    className="img-fluid rounded-circle align-self-start"
                    style={{ maxWidth: '40px' }}
                  />
                  <div className="mt-2" style={{ marginLeft: '1rem' }}>
                    <div>
                      <span>
                        {post.name} {post.last_name}
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              <div style={{ padding: '0 3rem' }}>
                <span className="text-justify" style={{ fontSize: '0.85rem', marginLeft: '0.5rem' }}>
                  {post.content}
                </span>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '10px',
                    color: '#5b6b77',
                  }}
                >
                  <span className="material-symbols-outlined">favorite</span>
                  <span style={{ marginLeft: '0.25rem' }}>12</span>

                  <span className="material-symbols-outlined" style={{ marginLeft: '2rem' }}>
                    forum
                  </span>
                  <span style={{ marginLeft: '0.25rem' }}>20</span>
                </div>
              </div>
              <hr style={{ borderTop: '1px solid gray', marginTop: '2rem' }} />
            </div>
          ))
        )}
            </div>
            ))}
        </>
    )
}