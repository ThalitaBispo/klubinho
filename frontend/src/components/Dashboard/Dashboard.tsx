import { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import Cookies from 'js-cookie';
import logo from '../../avatar/logo.jpeg';
import Hypher from 'hypher';
import pt from 'hyphenation.pt';

import { FormEvent } from '../types';
import styles from './Dashboard.module.css';

interface Post {
  id?: number;
  name?: string;
  last_name?: string;
  content?: string;
  commentText?: string;
  liked?: boolean;
}

/*interface LikeCount {
  [postId: number]: number;
}*/

export function Dashboard() {
  const [postagem, setPostagem] = useState<Post>({ content: '' });
  const [postagens, setPostagens] = useState<Post[]>([]);
  const [loadingPostagens, setLoadingPostagens] = useState<boolean>(false);

  const [, setStatus] = useState<string>('');
  const [text, setText] = useState<string>('');

  const [showComments, setShowComments] = useState<{ [postId: number]: boolean }>({});
  const [, setCommentText] = useState<string>('');
  const [comments, setComments] = useState({});

  const [, setLikedPosts] = useState<{ post_id: number; liked: boolean }[]>([]);
  //const [likesCount, setLikesCount] = useState<LikeCount>({});

  const user_id = Cookies.get('user_id');
  const club_id = Cookies.get('club_id');
  const role = Cookies.get('role');

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    fetchPostagens();
  }, []);

  axiosRetry(axios, {
    retries: 3, // Número máximo de tentativas de reenvio
    retryCondition: (error) => axiosRetry.isNetworkOrIdempotentRequestError(error) || error.response.status === 429, // Condição para reenviar a requisição
  });

  const fetchPostagens = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/post/getAllPostByClub/${club_id}`);
      setPostagens(response.data);
      setLoadingPostagens(false);

      const likedPostsData = response.data.map((post) => ({ post_id: post.id, liked: post.liked }));
      setLikedPosts(likedPostsData);

      // Buscar os comentários para cada postagem
      const postIdArray = response.data.map((post) => post.id);
      const commentsArray = await Promise.all(postIdArray.map((postId) => fetchComments(postId)));
      
      // Associar os comentários às postagens
      const commentsObject = {};
      postIdArray.forEach((postId, index) => {
        commentsObject[postId] = commentsArray[index];
      });
      setComments(commentsObject);

      setLoadingPostagens(false);
    } catch (error) {
      console.error(error);
    }

   //countLikes();
  };

  async function gravar(e: FormEvent) {
    e.preventDefault();

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
      setTimeout(fetchPostagens, 1000);
    } catch (error) {
      setStatus(`Falha: ${error}`);
      alert(`Falha: ${error}`);
    }
  }

  //curtidas
  /*const handleLike = async (postId: number) => {
    try {
      const index = likedPosts.findIndex((post) => post.post_id === postId);
      let liked = false;

      if (index !== -1) {
        liked = !likedPosts[index].liked;
        likedPosts[index].liked = liked;
        setLikedPosts([...likedPosts]);
      }

      await axios.post(
        `http://127.0.0.1:8000/api/like/create/${postId}`,
        {
          user_id: user_id,
          post_id: postId,
          liked: liked,
        },
        config
      );
    } catch (error) {
      console.error(postId);
      console.error(error);
    }
  };*/

  // Adicione uma função para contar curtidas
  /*const countLikes = async () => {
    try {
      const likesCounts = await Promise.all(postagens.map(async (post) => {
        const response = await axios.get(`http://127.0.0.1:8000/api/like/countLikes/${post.id}`);
        return { postId: post.id, likes: response.data };
      }));

      const likesCountObject = {};
      likesCounts.forEach((likesCount) => {
        likesCountObject[likesCount.postId] = likesCount.likes;
      });
      setLikesCount(likesCountObject);
    } catch (error) {
      console.error(error);
    }
  };*/

  //comentarios
  const gravarComment = async (e: FormEvent, postId: number) => {
    e.preventDefault();
    const post = postagens.find(post => post.id === postId);
    if (!post) return;

    try {
      await axios.post(
        'http://127.0.0.1:8000/api/comment/create',
        {
          user_id: user_id,
          post_id: postId,
          content: post.commentText, // Usar o texto do comentário correspondente à postagem
        },
        config
      );

      // Lógica para atualizar os comentários...
      const updatedComments = await fetchComments(postId);

      setComments(prevComments => ({
        ...prevComments,
        [postId]: updatedComments,
      }));

      // Limpar o texto do comentário após o envio
      handleCommentChange(postId, '');
    } catch (error) {
      setStatus(`Falha ao adicionar comentário: ${error}`);
      console.error(error);
    }
  };

  const handleCommentChange = (postId?: number, value?: string) => {
    setPostagens(postagens.map(post => {
      if (post.id === postId) {
        return { ...post, commentText: value };
      }
      return post;
    }));
  };

  const fetchComments = async (postId?: number) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/comment/getAllCommentsByPost/${postId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const toggleComments = (postId?: number) => {
    setShowComments((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  //textarea
  const quebrarLinhas = (texto: string, limite: number) => {
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

    linhas.push(linhaAtual.trim());

    const linhasHyphenated = linhas.map((linha) => h.hyphenate(linha).join('\u00AD'));

    return linhasHyphenated;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Verificar se o target é um HTMLTextAreaElement
  if (e.target instanceof HTMLTextAreaElement) {
    // Atualizar apenas o estado correspondente ao textarea em que está sendo digitado
    if (e.target.name === 'content') {
      setText(e.target.value);
    } else if (e.target.name === 'comment') {
      setCommentText(e.target.value);
    }
    autoExpand(e.target);
  }
  };

  const autoExpand = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  return (
    <>
      <div className="container">
        <form onSubmit={gravar}>
          <div className="row bg-light p-3">
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
                    style={{ width: '3rem', height: '3rem' }}
                  />
                  <div className="mt-2" style={{ marginLeft: '1rem' }}>
                    <div>
                      <span>
                        {post.name} {post.last_name}
                      </span>
                    </div>
                  </div>
                </a>
                <div className="position-relative ml-auto">
                  <span className="material-symbols-outlined position-absolute" style={{ top: '0', right: '0', left: '28rem', cursor: 'pointer' }}>
                    more_horiz
                  </span>
                </div>
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
                    onClick={() => toggleComments(post.id)}
                    style={{ cursor: 'pointer', marginLeft: '1rem' }}
                  >
                    forum
                  </span>
                </div>

                <div className="mt-4">
                  {showComments[post.id] && (
                    <>
                      {comments[post.id] && comments[post.id].length > 0 ? (
                        comments[post.id].map((comment) => (
                          <div key={comment.id} className={`d-flex ${styles.customComments}`}>
                            <img
                              src={
                                comment.imagem
                                  ? `http://127.0.0.1:8000/api/user/getImage/${comment.user_id}`
                                  : logo
                              }
                              alt="Imagem do perfil"
                              className="img-fluid rounded-circle align-self-start"
                              style={{ width: '2.5rem', height: '2.5rem' }}
                            />
                            <div>
                              <p className={`mt-2 ${styles.commentName}`}>{comment.name} {comment.last_name}</p>
                              <p className="mt-1">{comment.content}</p>
                            </div>
                            <div className="position-relative ml-auto">
                              <span className="material-symbols-outlined position-absolute" style={{ top: '0', right: '0', left: '22rem', cursor: 'pointer' }}>
                                more_horiz
                              </span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>Seja o(a) primeiro(a) a comentar esta postagem</p>
                      )}

                      <form onSubmit={(e) => gravarComment(e, post.id)}>
                        <div className="d-flex" style={{ padding: '1rem' }}>
                          <img
                            src={
                              post.imagem
                                ? `http://127.0.0.1:8000/api/user/getImage/${user_id}`
                                : logo
                            }
                            alt="Imagem do perfil"
                            className="img-fluid rounded-circle align-self-start"
                            style={{ width: '3rem', height: '3rem' }}
                          />
                          <textarea
                            className="form-control"
                            rows={1}
                            maxLength={255}
                            name="comment"
                            style={{ resize: 'none', marginLeft: '1rem' }}
                            placeholder="Faça um comentário..."
                            value={post.commentText || ''}
                            onChange={(e) => handleCommentChange(post.id, e.target.value)}
                          />
                          <button type="submit">Comentar</button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

