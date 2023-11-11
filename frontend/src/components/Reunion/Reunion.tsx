import { Link } from "react-router-dom";

export function Reunion() {
    return(
        <>
            <div className="container">
                <Link className="nav-link" to={"/createreunion"}>
                    <button className="btn" style={{ backgroundColor: 'var(--purple)', color: "white" }}>
                        Criar Reunião
                    </button>
                </Link>

                <div className="row mt-4">
                    <div className="col-md-8 mt-4" style={{ fontSize: '1.5rem' }}>
                        <b className="mt-4">Reunião</b>
                    </div>
                </div>

                <ul className="list-group-flush">
                    <li className="list-group-item">
                        <div className='d-flex'>
                            <Link to="/editreunion" className="nav-link d-flex flex-row mt-4">
                                <div className="mt-2">
                                    <div className="mt-1">
                                        <span className="d-block">Livros da semana 20</span>
                                        <span style={{ color: '#5b6b77' }}>11/11/2023</span>
                                    </div>
                                </div>
                                <button className="btn" style={{ margin: "1rem 0rem 1rem 18rem", backgroundColor: 'var(--purple)', color: "white" }}>Acessar</button>
                            </Link>
                        </div>
                    </li>

                    <li className="list-group-item mt-4">
                        <div className='d-flex'>
                            <a href="#" className="nav-link d-flex flex-row mt-2">
                                <div className="mt-2">
                                    <div className="mt-1">
                                        <span className="d-block">Livros da semana 20</span>
                                        <span style={{ color: '#5b6b77' }}>11/11/2023</span>
                                    </div>
                                </div>
                                <button className="btn" style={{ margin: "1rem 0rem 1rem 18rem", backgroundColor: 'var(--purple)', color: "white" }}>Acessar</button>
                            </a>
                        </div>
                    </li>

                    
                    <li className="list-group-item">
                        <div className='d-flex'>
                            <a href="#" className="nav-link d-flex flex-row mt-4">
                                <div className="mt-2">
                                    <div className="mt-1">
                                        <span className="d-block">Livros da semana 20</span>
                                        <span style={{ color: '#5b6b77' }}>11/11/2023</span>
                                    </div>
                                </div>
                                <button className="btn" style={{ margin: "1rem 0rem 1rem 18rem", backgroundColor: 'var(--purple)', color: "white" }}>Acessar</button>
                            </a>
                        </div>
                    </li>

                    <li className="list-group-item mt-4">
                        <div className='d-flex'>
                            <a href="#" className="nav-link d-flex flex-row mt-2">
                                <div className="mt-2">
                                    <div className="mt-1">
                                        <span className="d-block">Livros da semana 20</span>
                                        <span style={{ color: '#5b6b77' }}>11/11/2023</span>
                                    </div>
                                </div>
                                <button className="btn" style={{ margin: "1rem 0rem 1rem 18rem", backgroundColor: 'var(--purple)', color: "white" }}>Acessar</button>
                            </a>
                        </div>
                    </li>                 

                </ul>

            </div>
        </>
    )
}