import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './Dashboard.module.css';

export function Dashboard() {
  const [text, setText] = useState('');

  const handleInputChange = (e: any) => {
    setText(e.target.value);
    autoExpand(e.target);
  };

  const autoExpand = (textarea: any) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function posts() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/post/getAllPostByClub/1');
            setPosts(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
        }

        posts();
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

  //create
  /*const [postagem, setPostagem] = useState({});
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
        'http://127.0.0.1:8000/api/post/create',
        {
          user_id: postagem.user_id,
          club_id: postagem.club_id,
          content: postagem.content,
        },
        config
      );

      setStatus('Post cadastrado com sucesso!');
      alert('Post cadastrado com sucesso!');
      setPostagem({});
    } catch (error) {
      setStatus(`Falha: ${error}`);
      alert(`Falha: ${error}`);
    }
  }*/

  return (
    <>
      <div className="container">
        <form>
          <div className="p-3 bg-light">
            <div className="col-md-6">
              <textarea
                className={`${styles.textoArea}`}
                placeholder="No que você está pensando?"
                rows={2}
                maxLength = {300}
                value={text}
                onChange={handleInputChange}
              />
            </div>
            <div className='row'>
              <div className="col-sm mt-4">
                <label htmlFor="selecao-arquivo">
                  <span className="material-symbols-outlined"style={{ color: 'var(--purple)', cursor: 'pointer' }}>image</span>
                </label>
                <input id='selecao-arquivo' style={{ display: 'none' }} type='file' />
              </div>
              <div className="col-sm-2 mt-4">
                <a href="#">
                    <button className={styles.buttonPurple}>Postar</button>
                </a>
              </div>
            </div>
          </div>
        </form>


        {posts.map((post) => (
          <div style={{ margin: '1rem' }} key={post.id}>
            <div className='d-flex mt-2'>
              <a href="#" className="nav-link d-flex flex-row mt-4">
                <img
                  src="https://avatars.githubusercontent.com/u/74025683?v=4"
                  alt="Imagem do perfil"
                  className="img-fluid rounded-circle align-self-start"
                  style={{ maxWidth: "40px"}}
                />
                <div className="mt-2" style={{marginLeft: '1rem'}}>
                  <div>
                    <span>{post.name} {post.last_name}</span>
                    <span> . </span>
                    <span style={{ color: '#5b6b77' }}>15h</span>
                  </div>
                </div>
              </a>
            </div>

            <div style={{ padding: '0 3rem' }}>
              <span className='text-justify' style={{ fontSize: '0.85rem', marginLeft: "0.5rem" }}>
                {post.content}
              </span>
              <img 
                src="https://i.pinimg.com/564x/2b/54/f5/2b54f5b75ca5b428bf6ffc98443f9086.jpg"
                alt="Imagem do perfil"
                className="img-fluid align-self-start mt-3"
                style={{borderRadius: '10px', objectFit: 'cover', cursor: 'pointer'}}
              />
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', color: '#5b6b77' }}>
                <span className="material-symbols-outlined">favorite</span>
                <span style={{ marginLeft: '0.25rem' }}>12</span>

                <span className="material-symbols-outlined" style={{ marginLeft: '2rem' }}>forum</span>
                <span style={{ marginLeft: '0.25rem' }}>20</span>
              </div>
            </div>
            <hr style={{ borderTop: '1px solid gray', marginTop: '2rem' }} />
          </div>

          

        ))}

        </div>
    </>
  );
}
