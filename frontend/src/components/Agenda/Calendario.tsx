import { useState, useEffect } from 'react';
import axios from "axios";
import axiosRetry from 'axios-retry';
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
        const responseReuniao = await axios.get(`http://127.0.0.1:8000/api/reuniao/getAllReuniaoByClub/${club_id}`);
        const responseCalendar = await axios.get(`http://127.0.0.1:8000/api/calendar/getAllEventsByClub/${club_id}`);

        const reuniaoEvents = responseReuniao.data.map(reuniao => ({
          ...reuniao,
          data_evento: reuniao.data_reuniao, // Convertendo o campo data_reuniao para o mesmo formato que os eventos do calendário
          tipo: 'reuniao' // Adicionando o tipo de evento
        }));

        const allEvents = [...responseCalendar.data, ...reuniaoEvents];
        // Ordenar eventos por data crescente
        allEvents.sort((a, b) => new Date(a.data_evento) - new Date(b.data_evento));
        setEvents(allEvents);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    const delay = 200; // 5 seconds delay
    const timer = setTimeout(() => {
      fetchEvents();
    }, delay);

    return () => clearTimeout(timer); // Clear timeout on unmount

  }, [club_id]); // Ensure useEffect runs only when club_id changes

  // Organize os eventos por data
  const eventsByDate = {};
  events.forEach(event => {
    const eventDate = format(addDays(new Date(event.data_evento), 1), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
    if (!eventsByDate[eventDate]) {
      eventsByDate[eventDate] = [];
    }
    eventsByDate[eventDate].push(event);
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
                <Link className='nav-link' to={event.tipo === 'reuniao' ? `/editreunion/${event.id}` : `/editcalendario/${event.id}`}>
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
