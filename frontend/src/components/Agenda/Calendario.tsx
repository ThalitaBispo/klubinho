import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import ptBR from 'date-fns/locale/pt-BR';
import { format, addDays } from 'date-fns';

export function Calendario() {

  const [calendar, setCalendar] = useState([]);
  const [loading, setLoading] = useState(true);
  const club_id = Cookies.get('club_id');

  useEffect(() => {
    async function fetchCalendar() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/calendar/getAllEventsByClub/${club_id}`);
        setCalendar(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchCalendar();
  }, [club_id]);
  
  // Organize os eventos por data
  const eventsByDate = {};
  calendar.forEach(event => {
    const eventDate = format(addDays(new Date(event.data_evento), 1), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
    if (!eventsByDate[eventDate]) {
      eventsByDate[eventDate] = [];
    }
    eventsByDate[eventDate].push(event);
  });

  return (
    <div className="container">
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
                <li key={event.id} className={`list-group-item mt-4`}>
                  <div className='d-flex'>
                    <div className="mt-1">
                      <span className="d-block">{event.titulo}</span>
                      <span style={{ color: '#5b6b77' }}>{event.descricao}</span>
                    </div>
                  </div>
                </li>   
              ))}
            </ul> 
          </div>
        ))
      )}
    </div>
  );
}
