
import { Link } from 'react-router-dom';

export function EditCalendar() {


    return (
        <div className="container">
            
            <b>Criar Evento</b>

            <div className="mt-4">
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

                    <div className="form-group">         
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