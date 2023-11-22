import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import logo from '../../avatar/logo.jpeg';

import styles from './Dashboard.module.css';

export function Dashboard() {
  const [postagem, setPostagem] = useState({});
  const [status, setStatus] = useState('');
  const [loadingPostagens, setLoadingPostagens] = useState(false);
  const [text, setText] = useState('');
  const [postagens, setPostagens] = useState([]);
  const user_id = Cookies.get('user_id');
  const club_id = Cookies.get('club_id');

  //get
  const fetchPostagens = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/post/getAllPostByClub/${club_id}`);
      setPostagens(response.data);
      setLoadingPostagens(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPostagens();
  }, []);

  //create
  async function gravar(e: any) {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/post/create',
        {
          club_id: club_id,
          user_id: user_id,
          content: postagem.content,
        },
        config
      );

      setStatus('Post cadastrado com sucesso!');
      setPostagem({});
      setText('');

      fetchPostagens();

    } catch (error) {
      setStatus(`Falha: ${error}`);
      alert(`Falha: ${error}`);
    }
  }

  //textarea
  const handleInputChange = (e: any) => {
    setText(e.target.value);
    autoExpand(e.target);
  };

  const autoExpand = (textarea: any) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  return (
    <>
      <div className="container">
        <form onSubmit={gravar}>
          <div className="p-3 bg-light">
            <div className="col-md-6">
              <textarea
                className={`${styles.textoArea}`}
                placeholder="No que você está pensando?"
                rows={2}
                maxLength={300}
                name="content"
                value={text}
                onChange={(e) => {
                  handleInputChange(e);
                  setPostagem({ ...postagem, content: e.target.value });
                }}
              />
            </div>
            <div className="row">
              <div className="col-sm-2 mt-4">
                <a href="#">
                  <button type="submit" className={styles.buttonPurple}>
                    Postar
                  </button>
                </a>
              </div>
            </div>
          </div>
        </form>

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
    </>
  );
}
