
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import { FormEvent } from '../types';
import Cookies from 'js-cookie';

interface Calendar {
    titulo?: string;
    descricao?: string;
    data_evento?: string
    hora_evento?: string;
    fim_evento?: string;
  }

export function CreateCalendar() {

    const [calendar, setCalendar] = useState<Calendar>({});
    const [, setStatus] = useState<string>('');

    const club_id = Cookies.get('club_id');

    async function gravar(e: FormEvent) {
        e.preventDefault();
    
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
    
        try {
          await axios.post(
            'http://127.0.0.1:8000/api/calendar/create',
            {
              titulo: calendar.titulo,
              descricao: calendar.descricao,
              data_evento: calendar.data_evento,
              hora_evento: calendar.hora_evento,
              fim_evento: calendar.fim_evento,
              club_id: club_id,
              
            },
            config
          );
    
          setStatus('Evento cadastrado com sucesso!');
          alert('Evento cadastrado com sucesso!');
          setCalendar({});
        } catch (error) {
          setStatus(`Falha: ${error}`);
          alert(`Falha: ${error}`);
          console.log(error);
          console.log(config);
        }
      }


    return (
        <div className="container">
            
            <b>Criar Evento</b>

            <div className="mt-4">
                <form onSubmit={gravar}>
                    <div className="form-group">
                        <label>Título</label>
                        <input type="text" className="form-control" name='titulo' placeholder="Título"
                        value={calendar.titulo || ''}
                        onChange={(e) => setCalendar({ ...calendar, titulo: e.target.value })} />
                    </div>
                    <div className="form-group mt-4">
                        <label>Descrição</label>
                        <input type="text" className="form-control" name='descricao' placeholder="Descrição" 
                        value={calendar.descricao || ''}
                        onChange={(e) => setCalendar({ ...calendar, descricao: e.target.value })}/>
                    </div>
                    <div className="form-group mt-4">
                        <label>Data</label>
                        <input type="date" className="form-control" name='data_evento' placeholder="Descrição" 
                        value={calendar.data_evento || ''}
                        onChange={(e) => setCalendar({ ...calendar, data_evento: e.target.value })}/>
                    </div>
                    <div className="form-group mt-4">
                        <div className="row">
                            <div className="col">
                                <label>Começa</label>
                                <input type="time" name='hora_evento' className="form-control" 
                                value={calendar.hora_evento || ''}
                                onChange={(e) => setCalendar({ ...calendar, hora_evento: e.target.value })}/>
                            </div>
                            <div className="col">
                                <label>Termina</label>
                                <input type="time" name='fim_evento' className="form-control" 
                                value={calendar.fim_evento || ''}
                                onChange={(e) => setCalendar({ ...calendar, fim_evento: e.target.value })}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group mt-4">         
                        <button type="submit"> Salvar </button>

                        <Link to={"/calendario"}> 
                            <button type="button" className="mt-4"> Voltar </button> 
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )
}