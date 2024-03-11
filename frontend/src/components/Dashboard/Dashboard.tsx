import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import logo from '../../avatar/logo.jpeg';

import { FormEvent } from '../types';

import styles from './Dashboard.module.css';

import Hypher from 'hypher';
import pt from 'hyphenation.pt';

export function Dashboard() {
  const [postagem, setPostagem] = useState({ content: '' });
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
  async function gravar(e: FormEvent) {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      await axios.post(
        'http://127.0.0.1:8000/api/post/create',
        {
          club_id: club_id,
          user_id: user_id,
          content: postagem.content,
        },
        config
      );

      setStatus('Post cadastrado com sucesso!');
      setPostagem({ content: '' });
      setText('');

      fetchPostagens();
    } catch (error) {
      console.error(error);
      setStatus(`Falha: ${error}`);
      alert(`Falha: ${error}`);
    }
  }

  //curtidas:
  const [countLike, setCountLike] = useState(0);
  const [likedPosts, setLikedPosts] = useState([]);

  const countLikes = (postId) => {
    if (!likedPosts.includes(postId)) {
      setLikedPosts([...likedPosts, postId]);
      setCountLike(countLike + 1);
    } else {
      const updatedLikedPosts = likedPosts.filter((id) => id !== postId);
      setLikedPosts(updatedLikedPosts);
      setCountLike(countLike - 1);
    }
  };

  //comentarios
  // Adicione um estado para controlar a visibilidade dos comentários e o texto do comentário
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');

  // Função para alternar a visibilidade dos comentários
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  // Função para lidar com a submissão de um novo comentário
  const submitComment = async (postId) => {
    try {
      await axios.post(
        'http://127.0.0.1:8000/api/comment/create',
        {
          post_id: postId,
          user_id: user_id,
          content: commentText,
        },
        config
      );

      // Lógica para recarregar os comentários após a submissão
      fetchPostagens();
      setCommentText('');
    } catch (error) {
      console.error(error);
      setStatus(`Falha: ${error}`);
      alert(`Falha: ${error}`);
    }
  };

  //função para quebrar linha
  const quebrarLinhas = (texto: string, limite) => {
    const h = new Hypher(pt);

    const palavras = texto.split(/\s+/);
    const linhas = [];
    let linhaAtual = '';

    palavras.forEach((palavra) => {
      if (linhaAtual.length + palavra.length <= limite) {
        linhaAtual += `${palavra} `;
      } else {
        linhas.push(linhaAtual.trim());
        linhaAtual = `${palavra} `;
      }
    });

    // Adiciona a última linha
    linhas.push(linhaAtual.trim());

    // Adiciona lógica de hyphenation
    const linhasHyphenated = linhas.map((linha) => h.hyphenate(linha).join('\u00AD'));

    return linhasHyphenated;
  };

  // Adicionei a função handleInputChange
  const handleInputChange = (e: FormEvent) => {
    setText(e.target.value);
    autoExpand(e.target);
  };

  const autoExpand = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  return (
    <>
      <div className="container">
        <form onSubmit={gravar}>
          <div className="row bg-light p-3">
            {/* Adicionei o evento onChange na textarea */}
            <textarea
              className={`${styles.textoArea}`}
              placeholder="No que você está pensando?"
              rows={2}
              maxLength={255}
              name="content"
              value={text}
              onChange={(e) => {
                handleInputChange(e);
                setPostagem({ ...postagem, content: e.target.value });
              }}
            />
            <div className="row">
              <div className="col-sm-2 mt-4">
                <button type="submit" className={styles.buttonPurple}>
                  Postar
                </button>
              </div>
            </div>
          </div>
        </form>

        {loadingPostagens ? (
          <p>Carregando postagens...</p>
        ) : (
          postagens.map((post) => (
            <div className={styles.customPost} key={post.id}>
              <div className="d-flex">
                <a href="#" className="nav-link d-flex flex-row">
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
                {quebrarLinhas(post.content, 255).map((linha, index) => (
                  <p
                    key={index}
                    className={`text-justify ${styles.breakLines}`}
                  >
                    {linha}
                  </p>
                ))}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '10px',
                    color: '#5b6b77',
                  }}
                >
                    <span
                      className="material-symbols-outlined"
                      onClick={() => countLikes(post.id)}
                      style={{ cursor: 'pointer', color: likedPosts.includes(post.id) ? 'red' : 'inherit' }}
                    >
                      favorite
                    </span>
                    <span style={{ marginLeft: '0.25rem' }}>{countLike}</span>
                

                    <span
                      className="material-symbols-outlined"
                      onClick={toggleComments}
                      style={{ cursor: 'pointer', marginLeft: '1rem'}}
                    >
                      forum
                    </span>

                  </div>

                  {showComments && (
                    <div style={{ marginTop: '1rem' }}>
                      {/* Comentário estático */}
                      <div className={`d-flex ${styles.customComments}`}>
                        <img
                          src={logo}
                          alt="Imagem do perfil"
                          className="img-fluid rounded-circle align-self-start"
                          style={{ maxWidth: '30px', marginRight: '1rem' }}
                        />
                        <p className='mt-1'>Comentário Estático</p>
                      </div>

                      <div className={`d-flex ${styles.customComments}`}>
                        <img
                          src={logo}
                          alt="Imagem do perfil"
                          className="img-fluid rounded-circle align-self-start"
                          style={{ maxWidth: '30px', marginRight: '1rem' }}
                        />
                        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar ligula eget tellus molestie laoreet.</p>
                      </div>

                      <div className={`d-flex ${styles.customComments}`}>
                        <img
                          src={logo}
                          alt="Imagem do perfil"
                          className="img-fluid rounded-circle align-self-start"
                          style={{ maxWidth: '30px', marginRight: '1rem' }}
                        />
                        <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar ligula eget tellus molestie laoreet. Etiam egestas magna non diam aliquet varius. Phasellus a lacus auctor, vulputate eros efficitur, bibendum magna. Suspendisse vestibulum, velit.</p>
                      </div>

                      {/* Campo para o usuário fazer um comentário */}
                      <div className="d-flex" style={{ padding: '1rem' }}>
                        <img
                          src={logo}
                          alt="Imagem do perfil"
                          className="img-fluid rounded-circle align-self-start"
                          style={{ maxWidth: '30px', marginRight: '1rem' }}
                        />
                        <textarea
                          className="form-control"
                          rows={1}
                          maxLength={255}
                          style={{ resize: 'none' }}
                          placeholder="Faça um comentário..."
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                        />
                        <button onClick={() => submitComment(post.id)}>Comentar</button>
                      </div>
                    </div>
                  )}

              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
