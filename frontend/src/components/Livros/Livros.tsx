import React, { useState, useEffect, ChangeEvent } from 'react';
import apilivros from '../services/ApiLivros';

export function Livros() {
    const [livros, setLivros] = useState<any[]>([]); // Definindo um estado inicial vazio como um array de qualquer tipo

    const [termoBusca, setTermoBusca] = useState('');

    useEffect(() => {
        async function fetchLivros() {
            try {
                const response = await apilivros.get(`${termoBusca}`);
                if (response.status !== 200) {
                    throw new Error('Erro ao carregar os dados');
                }
                const data = response.data;
                setLivros(data.items || []); // Garantindo que mesmo se data.items for nulo, não ocorra erro de acesso a propriedade volumeInfo
            } catch (error) {
                console.error('Erro ao obter os dados dos livros:', error);
            }
        }

        fetchLivros();
    }, [termoBusca]);

    const handleTermoBuscaChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTermoBusca(event.target.value);
    };

    return (
        <>
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-md-8 mt-4" style={{ fontSize: '1.5rem' }}>
                        <b>BUSCAR</b>
                        <b> - </b>
                        <b>Livro da semana</b>
                    </div>
                    <div className="col-md-4 mt-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar livros..."
                            value={termoBusca}
                            onChange={handleTermoBuscaChange}
                        />
                    </div>
                </div>

                <div className="row mt-4">
                    {livros.map((livro: any, index: number) => ( // Definindo tipo any para livro temporariamente
                        <div key={index} className="col-md-4 mt-4">
                            <div className="card" style={{ width: '14rem' }}>
                                <img
                                    className="card-img-top"
                                    src={livro.volumeInfo?.imageLinks?.smallThumbnail || ''} // Utilizando operadores opcionais para evitar erros se a estrutura de dados não estiver completa
                                    alt="Livro"
                                    style={{ width: '222px', height: '180px' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontSize: '1rem' }}>{livro.volumeInfo?.title || 'Título não disponível'}</h5>
                                    <p className="card-text" style={{ fontSize: '0.9rem' }}>{livro.volumeInfo?.authors?.join(', ') || 'Autor não disponível'}</p>
                                    <p className="card-text" style={{ fontSize: '0.9rem' }}>{'Páginas: '+ livro.volumeInfo?.pageCount || 'Não disponível'}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
