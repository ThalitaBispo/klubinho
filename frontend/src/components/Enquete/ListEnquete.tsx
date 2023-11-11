import { Link } from "react-router-dom";

export function ListEnquete() {
    return(
        <>
            <div className="container">
                <Link className="nav-link" to={"/createenquete"}>
                    <button className="btn" style={{ backgroundColor: 'var(--purple)', color: "white" }}>
                        Criar enquete
                    </button>
                </Link>

                <div className="row mt-4">
                    <div className="col-md-8 mt-4" style={{ fontSize: '1.5rem' }}>
                        <b className="mt-4">Enquetes</b>
                    </div>
                </div>

                <ul className="list-group-flush">
                    <li className="list-group-item">
                        <div className='d-flex'>
                            <Link to="/enquete" className="nav-link d-flex flex-row mt-4">
                                <img
                                    src="https://i.pinimg.com/564x/70/59/89/705989e782fdaa41034773229cb0d764.jpg"
                                    alt="Imagem do perfil"
                                    className="img-fluid rounded-circle align-self-start"
                                    style={{ width: "70px", height: "70px"}}
                                />
                                <div className="mt-2" style={{marginLeft: '1rem'}}>
                                    <div className="mt-1">
                                        <span className="d-block">Livros da semana 20</span>
                                        <span className="d-block" style={{ color: '#5b6b77' }}>@kauaduarte</span>
                                    </div>
                                </div>
                                <button className="btn" style={{ margin: "1rem 0rem 1rem 18rem", backgroundColor: 'var(--purple)', color: "white" }}>Acessar</button>
                            </Link>
                        </div>
                    </li>

                    <li className="list-group-item mt-4">
                        <div className='d-flex'>
                            <a href="#" className="nav-link d-flex flex-row mt-2">
                                <img
                                    src="https://i.pinimg.com/564x/e3/a3/b7/e3a3b783afc53919e1adbd3e341b9508.jpg"
                                    alt="Imagem do perfil"
                                    className="img-fluid rounded-circle align-self-start"
                                    style={{ width: "70px", height: "70px"}}
                                />
                                <div className="mt-2" style={{marginLeft: '1rem'}}>
                                    <div className="mt-1">
                                        <span className="d-block">Curador semana 1/4</span>
                                        <span className="d-block" style={{ color: '#5b6b77' }}>@kauaduarte</span>
                                    </div>
                                </div>
                                <button className="btn" style={{ margin: "1rem 0rem 1rem 18rem", backgroundColor: 'var(--purple)', color: "white" }}>Acessar</button>
                            </a>
                        </div>
                    </li>

                    
                    <li className="list-group-item">
                        <div className='d-flex'>
                            <a href="#" className="nav-link d-flex flex-row mt-4">
                                <img
                                    src="https://i.pinimg.com/564x/60/33/98/6033986b2b23a155f39e2c672fb14ecf.jpg"
                                    alt="Imagem do perfil"
                                    className="img-fluid rounded-circle align-self-start"
                                    style={{ width: "70px", height: "70px"}}
                                />
                                <div className="mt-2" style={{marginLeft: '1rem'}}>
                                    <div className="mt-1">
                                        <span className="d-block">Livros da semana 20</span>
                                        <span className="d-block" style={{ color: '#5b6b77' }}>@kauaduarte</span>
                                    </div>
                                </div>
                                <button className="btn" style={{ margin: "1rem 0rem 1rem 18rem", backgroundColor: 'var(--purple)', color: "white" }}>Acessar</button>
                            </a>
                        </div>
                    </li>

                    <li className="list-group-item mt-4">
                        <div className='d-flex'>
                            <a href="#" className="nav-link d-flex flex-row mt-2">
                                <img
                                    src="https://i.pinimg.com/564x/1f/e7/bc/1fe7bc42b8c9df8f3853927e3fa055f8.jpg"
                                    alt="Imagem do perfil"
                                    className="img-fluid rounded-circle align-self-start"
                                    style={{ width: "70px", height: "70px"}}
                                />
                                <div className="mt-2" style={{marginLeft: '1rem'}}>
                                    <div className="mt-1">
                                        <span className="d-block">Livros da semana 22</span>
                                        <span className="d-block" style={{ color: '#5b6b77' }}>@kauaduarte</span>
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