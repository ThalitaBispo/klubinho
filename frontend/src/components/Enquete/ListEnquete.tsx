import { Link } from "react-router-dom";
import styles from './Enquete.module.css';

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

                <Link to="/enquete" className={`nav-link list-group-flush" ${styles.customEnquete}`}>
                    <div className="d-flex flex-row mt-4 mb-4">
                        <div className="list-group-item">
                            <span className="material-symbols-outlined" style={{ color: '#5b6b77' }}>ballot</span>
                                <div className="mt-1">
                                    <span className="d-block">Livros da semana 20</span>
                                    <span className="d-block" style={{ color: '#5b6b77' }}>@kauaduarte</span>
                                </div>
                        </div>
                    </div>
                </Link>

                <Link to="/enquete" className={`nav-link list-group-flush" ${styles.customEnquete}`}>
                    <div className="d-flex flex-row mt-4 mb-4">
                        <div className="list-group-item">
                            <span className="material-symbols-outlined" style={{ color: '#5b6b77' }}>ballot</span>
                                <div className="mt-1">
                                    <span className="d-block">Livros da semana 20</span>
                                    <span className="d-block" style={{ color: '#5b6b77' }}>@kauaduarte</span>
                                </div>
                        </div>
                    </div>
                </Link>

                <Link to="/enquete" className={`nav-link list-group-flush" ${styles.customEnquete}`}>
                    <div className="d-flex flex-row mt-4 mb-4">
                        <div className="list-group-item">
                            <span className="material-symbols-outlined" style={{ color: '#5b6b77' }}>ballot</span>
                                <div className="mt-1">
                                    <span className="d-block">Livros da semana 20</span>
                                    <span className="d-block" style={{ color: '#5b6b77' }}>@kauaduarte</span>
                                </div>
                        </div>
                    </div>
                </Link>

                <Link to="/enquete" className={`nav-link list-group-flush" ${styles.customEnquete}`}>
                    <div className="d-flex flex-row mt-4 mb-4">
                        <div className="list-group-item">
                            <span className="material-symbols-outlined" style={{ color: '#5b6b77' }}>ballot</span>
                                <div className="mt-1">
                                    <span className="d-block">Livros da semana 20</span>
                                    <span className="d-block" style={{ color: '#5b6b77' }}>@kauaduarte</span>
                                </div>
                        </div>
                    </div>
                </Link>                 

            </div>
        </>
    )
}