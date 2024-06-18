import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importe useNavigate
import Cookies from 'js-cookie';

export function CreateEnquete() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const user_id = Cookies.get('user_id');
  const club_id = Cookies.get('club_id');
  const navigate = useNavigate(); // Use useNavigate para obter a função de navegação

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Chamada API para criar a enquete
      const enqueteResponse = await fetch('http://127.0.0.1:8000/api/enquete/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ user_id: user_id, club_id: club_id, title, description }),
});

if (!enqueteResponse.ok) {
  throw new Error('Falha ao criar enquete');
}

const enqueteData = await enqueteResponse.json();
const enqueteId = enqueteData.id;

// Armazenar o ID da enquete em um cookie
Cookies.set('enquete_id', enqueteId, { expires: 7 });

console.log('Enquete criada com ID:', enqueteId);

// Redirecionar para a tela de adicionar opções de enquete
navigate(`/adicionar-enquete`);

    } catch (error) {
      console.error('Erro:', error);
      alert('Falha ao criar enquete. Verifique o console para mais detalhes.');
    }
  };

  return (
    <div className="container">
      <span style={{ fontSize: "1.5rem" }}>Criar enquete</span>

      <form className="mt-4" style={{ marginBottom: "3rem" }} onSubmit={handleSubmit}>
        <div className="form-group mt-4">
          <label>Título</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título"
            maxLength={60}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group mt-4 mb-4">
          <label>Descrição</label>
          <input
            type="text"
            className="form-control"
            placeholder="Descrição"
            maxLength={255}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="btn mt-4" style={{ backgroundColor: "var(--purple)", color: "var(--white)" }}>Salvar</button>

        <Link to={"/listenquete"}>
          <button type="button" className="btn mt-4" style={{ backgroundColor: 'var(--purple)', color: 'var(--white)', marginLeft: "1rem" }}>Cancelar</button>
        </Link>
      </form>
    </div>
  );
}
