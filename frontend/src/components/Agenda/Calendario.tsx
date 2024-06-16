import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import ptBR from 'date-fns/locale/pt-BR';
import { format, addDays } from 'date-fns';
import { Link } from "react-router-dom";
import styles from './Calendario.module.css';

export function Calendario() {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const club_id = Cookies.get('club_id');

  useEffect(() => {
    async function fetchEvents() {
      try {
        const currentDate = new Date();
        const formattedDate = format(currentDate, 'yyyy-MM-dd');

        const response = await axios.get(`http://127.0.0.1:8000/api/eventos/${club_id}?data_evento=${formattedDate}`);

        const allEvents = response.data.map(event => {
          if (event.data_reuniao) {
            return {
              id: event.id,
              titulo: event.titulo,
              descricao: event.descricao,
              data_evento: event.data_reuniao, // Convertendo o campo data_reuniao para o mesmo formato que os eventos do calendário
              hora_evento: event.hora_reuniao,
              tipo: 'reuniao' // Adicionando o tipo de evento
            };
          } else {
            return {
              id: event.id,
              titulo: event.titulo,
              descricao: event.descricao,
              data_evento: event.data_evento,
              hora_evento: event.hora_evento,
              tipo: 'evento' // Adicionando o tipo de evento
            };
          }
        });

        // Ordenar eventos por data crescente
        allEvents.sort((a, b) => new Date(a.data_evento) - new Date(b.data_evento));
        setEvents(allEvents);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    const delay = 200; // 200 milliseconds delay
    const timer = setTimeout(() => {
      fetchEvents();
    }, delay);

    return () => clearTimeout(timer); // Clear timeout on unmount

  }, [club_id]); // Ensure useEffect runs only when club_id changes

  // Organize os eventos por data
  const eventsByDate = {};
  events.forEach(event => {
    try {
      const eventDate = new Date(event.data_evento);
      if (isNaN(eventDate)) {
        console.error(`Invalid date for event: ${event.data_evento}`);
        return;
      }
      const formattedDate = format(addDays(eventDate, 1), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
      if (!eventsByDate[formattedDate]) {
        eventsByDate[formattedDate] = [];
      }
      eventsByDate[formattedDate].push(event);
    } catch (e) {
      console.error(`Error formatting date for event: ${event.data_evento}`, e);
    }
  });

  // Função para formatar a descrição com quebra de linha a cada 60 caracteres
  const formatarDescricao = (descricao) => {
    if (descricao.length > 60) {
      return descricao.match(/.{1,60}/g).join('\n');
    }
    return descricao;
  };

  return (
    <div className="container mb-4">
      <div className="form-group">
        <div className="row">
          <div className="col">
            <b>Calendário</b>
          </div>
          <div className="col-md-4">
            <Link to={'/createcalendario'}>
              <button>Criar evento</button>
            </Link>
          </div>
        </div>
      </div>

      {loading ? (
        <div>Carregando...</div>
      ) : (
        Object.keys(eventsByDate).map(date => (
          <div key={date}>
            <div className="row mt-4">
              <div className="col">
                <span className="mt-4">{date}</span>
              </div>
            </div>

            <ul className={`list-group`}>
              {eventsByDate[date].map(event => (
                <Link key={event.id} className='nav-link' to={event.tipo === 'reuniao' ? `/editreunion/${event.id}` : `/editcalendario/${event.id}`}>
                  <li className={`list-group-item mt-4 ${styles.customEvent}`}>
                    <span className="material-symbols-outlined" style={{ color: '#5b6b77' }}>{event.tipo === 'reuniao' ? 'connect_without_contact' : 'today'}</span>
                    <div className='d-flex'>
                      <div className="mt-1">
                        <span className="d-block">{event.titulo}</span>
                        <span style={{ color: '#5b6b77' }}>{formatarDescricao(event.descricao)}</span>
                      </div>
                    </div>
                  </li>   
                </Link>
              ))}
            </ul> 
          </div>
        ))
      )}
    </div>
  );
}
