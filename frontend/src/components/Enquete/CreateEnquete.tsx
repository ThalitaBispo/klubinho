import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";

interface Enquete {
  title?: string;
  description?: string;
  id?: number;
}

export function CreateEnquete() {
  const [enquete, setEnquete] = useState<Enquete>({});
  const [, setStatus] = useState<string>('');

  const user_id = Cookies.get('user_id');
  const club_id = Cookies.get('club_id');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEnquete(prevEnquete => ({
      ...prevEnquete,
      [name]: value,
    }));
  };

  async function gravar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/enquete/create',
        {
          title: enquete.title,
          description: enquete.description,
          club_id: club_id,
          user_id: user_id,
        },
        config
      );

      console.log('Response data:', response.data); // Adicione esta linha para depuração

      setStatus('Enquete cadastrada com sucesso!');
      setEnquete({});
      navigate('/adicionar-enquete'); // Navegue para a nova página

    } catch (error) {
      setStatus(`Falha: ${error.message}`);
      alert(`Falha: ${error.message}`);
      console.log(error);
    }
  }

  return (
    <div className="container">
      <span style={{ fontSize: "1.5rem" }}>Criar enquete</span>

      <form className="mt-4" style={{ marginBottom: "3rem" }} onSubmit={gravar}>
        <div className="form-group mt-4">
          <label>Título</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título"
            name="title"
            maxLength={60}
            value={enquete.title || ''}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mt-4 mb-4">
          <label>Descrição</label>
          <input
            type="text"
            className="form-control"
            placeholder="Descrição"
            maxLength={255}
            name="description"
            value={enquete.description || ''}
            onChange={handleChange}
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
