
import { useState } from 'react';
import styles from './Calendario.module.css';

export function Calendario() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = (date: Date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      return new Date(year, month + 1, 0).getDate();
    };
  
    const firstDayOfMonth = (date: Date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      return new Date(year, month, 1).getDay();
    };
  
    const renderDays = () => {
      const totalDays = daysInMonth(currentDate);
      const startingDay = firstDayOfMonth(currentDate);
      const daysArray = [];
  
      // Adicionar dias vazios para completar a primeira semana
      for (let i = 0; i < startingDay; i++) {
        daysArray.push(<div key={`empty${i}`} className={`${styles.emptyDay}`}></div>);
      }
  
      // Adicionar dias do mês
      for (let day = 1; day <= totalDays; day++) {
        daysArray.push(<div key={day} className={`${styles.day}`}>{day}</div>);
      }
  
      return daysArray;
    };
  
    const nextMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };
  
    const prevMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

  return (
    <div className={`${styles.calendar}`}>
      <div className={`${styles.Mounth}`}>

        <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>

        <div>
            <span onClick={prevMonth} className={`material-symbols-outlined ${styles.arrows}`}>chevron_left</span>
            <span onClick={nextMonth} className={`material-symbols-outlined ${styles.arrows}`}>chevron_right</span>
        </div>

      </div>
      <div className={`${styles.weekdays}`} style={{ display: 'flex' }}>
        <div style={{ flex: '1', textAlign: 'center', padding: '5px' }}>Dom</div>
        <div style={{ flex: '1', textAlign: 'center', padding: '5px' }}>Seg</div>
        <div style={{ flex: '1', textAlign: 'center', padding: '5px' }}>Ter</div>
        <div style={{ flex: '1', textAlign: 'center', padding: '5px' }}>Qua</div>
        <div style={{ flex: '1', textAlign: 'center', padding: '5px' }}>Qui</div>
        <div style={{ flex: '1', textAlign: 'center', padding: '5px' }}>Sex</div>
        <div style={{ flex: '1', textAlign: 'center', padding: '5px' }}>Sab</div>
      </div>
      <div className={`${styles.days}`}>
        {renderDays()}
      </div>

      <button>Agendar</button>

      <div className={`${styles.formCalendar}`}>
        <form>
            <div className="form-group">
                <label>Título</label>
                <input type="email" className="form-control" placeholder="Título" />
            </div>
            <div className="form-group mt-4">
                <label>Descrição</label>
                <input type="text" className="form-control" placeholder="Descrição" />
            </div>
            <div className="form-group mt-4">
                <label>Data</label>
                <input type="date" className="form-control" placeholder="Descrição" />
            </div>
            <div className="form-group mt-4">
                <div className="row">
                    <div className="col">
                        <label>Começa</label>
                        <input type="time" className="form-control" />
                    </div>
                    <div className="col">
                        <label>Termina</label>
                        <input type="time" className="form-control" />
                    </div>
                </div>
            </div>
            <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );

      
}