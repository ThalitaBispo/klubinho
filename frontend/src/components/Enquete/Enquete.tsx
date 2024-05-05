
import styles from './Enquete.module.css';

export function Enquete() {
    return (
        <>
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-md-8 mt-4" style={{ fontSize: '1.5rem' }}>
                        <b>Enquete</b>
                        <b> - </b>
                        <b>Livro da semana</b>
                    </div>
                </div>
                
                <div className="row mt-4">    
                    <div className="col-md-4 mt-4">
                        <div className="card" style={{ width: '14rem' }}>
                            <img 
                                className="card-img-top" 
                                src="https://i.pinimg.com/564x/70/59/89/705989e782fdaa41034773229cb0d764.jpg" 
                                alt="Livro"
                                style={{ width: '222px', height: '180px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontSize: '1rem' }}>Título do card</h5>
                                <p className="card-text" style={{ fontSize: '0.9rem' }}>Um exemplo de texto rápido para construir o título do card.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <div className="card" style={{ width: '14rem' }}>
                            <img 
                                className="card-img-top" 
                                src="https://i.pinimg.com/564x/e3/a3/b7/e3a3b783afc53919e1adbd3e341b9508.jpg" 
                                alt="Livro"
                                style={{ width: '222px', height: '180px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontSize: '1rem' }}>Título do card</h5>
                                <p className="card-text" style={{ fontSize: '0.9rem' }}>Um exemplo de texto rápido para construir o título do card.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <div className="card" style={{ width: '14rem' }}>
                            <img 
                                className="card-img-top" 
                                src="https://i.pinimg.com/564x/60/33/98/6033986b2b23a155f39e2c672fb14ecf.jpg" 
                                alt="Livro"
                                style={{ width: '222px', height: '180px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontSize: '1rem' }}>Título do card</h5>
                                <p className="card-text" style={{ fontSize: '0.9rem' }}>Um exemplo de texto rápido para construir o título do card.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <div className="card" style={{ width: '14rem' }}>
                            <img 
                                className="card-img-top" 
                                src="https://i.pinimg.com/564x/1f/e7/bc/1fe7bc42b8c9df8f3853927e3fa055f8.jpg" 
                                alt="Livro"
                                style={{ width: '222px', height: '180px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontSize: '1rem' }}>Título do card</h5>
                                <p className="card-text" style={{ fontSize: '0.9rem' }}>Um exemplo de texto rápido para construir o título do card.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <div className="card" style={{ width: '14rem' }}>
                            <img 
                                className="card-img-top" 
                                src="https://i.pinimg.com/564x/bf/3a/55/bf3a55db13b6bf3bb695cf3312717131.jpg" 
                                alt="Livro"
                                style={{ width: '222px', height: '180px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontSize: '1rem' }}>Título do card</h5>
                                <p className="card-text" style={{ fontSize: '0.9rem' }}>Um exemplo de texto rápido para construir o título do card.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <div className="card" style={{ width: '14rem' }}>
                            <img 
                                className="card-img-top" 
                                src="https://i.pinimg.com/564x/5d/02/0a/5d020a8da051459854bd0d9a23893033.jpg" 
                                alt="Livro"
                                style={{ width: '222px', height: '180px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ fontSize: '1rem' }}>Título do card</h5>
                                <p className="card-text" style={{ fontSize: '0.9rem' }}>Um exemplo de texto rápido para construir o título do card.</p>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>

            <div className="container">
                <div className="row mt-4" style={{ padding: '1rem' }}>
                    <b style={{ fontSize: '1.5rem' }}>Votação</b>
                </div>

                <div className="row mt-4 mb-4" style={{ padding: '0 0 0 1rem' }}>
                    <div className="col-md-8">
                        <span style={{ fontSize: '1.2rem' }}>Livros</span>
                    </div>

                    <div className="col-md-4">
                        <span style={{ fontSize: '1.2rem' }}>votos</span>
                    </div>
                </div>
            </div>        
       

            <div className={`nav-link list-group-flush" ${styles.customVotos}`}>
                <div className="d-flex mt-2 mb-2 align-items-center">
                    <div className='col-2'>
                        <img 
                            className="card-img-top" 
                            src="https://i.pinimg.com/564x/5d/02/0a/5d020a8da051459854bd0d9a23893033.jpg" 
                            alt="Livro"
                            style={{ width: '80px', height: '120px' }}
                        />
                    </div>
                    <div className={`col-5 d-flex flex-column ${styles.customTitle}`}>
                        <span style={{ fontWeight: "bold" }}>Livros da semana 20</span>
                        <span style={{ color: '#5b6b77' }}>@kauaduarte</span>
                    </div>

                    <div className={`col-4 d-flex justify-content-center align-items-center ${styles.customTitle}`}>
                        <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>50%</span>
                    </div>
                </div>
            </div>    

            <div className={`nav-link list-group-flush" ${styles.customVotos}`}>
                <div className="d-flex mt-2 mb-2 align-items-center">
                    <div className='col-2'>
                        <img 
                            className="card-img-top" 
                            src="https://i.pinimg.com/564x/bf/3a/55/bf3a55db13b6bf3bb695cf3312717131.jpg" 
                            alt="Livro"
                            style={{ width: '80px', height: '120px' }}
                        />
                    </div>
                    <div className={`col-5 d-flex flex-column ${styles.customTitle}`}>
                        <span style={{ fontWeight: "bold" }}>Livros da semana 20</span>
                        <span style={{ color: '#5b6b77' }}>@kauaduarte</span>
                    </div>

                    <div className={`col-4 d-flex justify-content-center align-items-center ${styles.customTitle}`}>
                        <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>50%</span>
                    </div>
                </div>
            </div>    

            <div className={`nav-link list-group-flush" ${styles.customVotos}`}>
                <div className="d-flex mt-2 mb-2 align-items-center">
                    <div className='col-2'>
                        <img 
                            className="card-img-top" 
                            src="https://i.pinimg.com/564x/e3/a3/b7/e3a3b783afc53919e1adbd3e341b9508.jpg" 
                            alt="Livro"
                            style={{ width: '80px', height: '120px' }}
                        />
                    </div>
                    <div className={`col-5 d-flex flex-column ${styles.customTitle}`}>
                        <span style={{ fontWeight: "bold" }}>Livros da semana 20</span>
                        <span style={{ color: '#5b6b77' }}>@kauaduarte</span>
                    </div>

                    <div className={`col-4 d-flex justify-content-center align-items-center ${styles.customTitle}`}>
                        <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>50%</span>
                    </div>
                </div>
            </div>    

            <div className={`nav-link list-group-flush" ${styles.customVotos}`}>
                <div className="d-flex mt-2 mb-2 align-items-center">
                    <div className='col-2'>
                        <img 
                            className="card-img-top" 
                            src="https://i.pinimg.com/564x/70/59/89/705989e782fdaa41034773229cb0d764.jpg" 
                            alt="Livro"
                            style={{ width: '80px', height: '120px' }}
                        />
                    </div>
                    <div className={`col-5 d-flex flex-column ${styles.customTitle}`}>
                        <span style={{ fontWeight: "bold" }}>Livros da semana 20</span>
                        <span style={{ color: '#5b6b77' }}>@kauaduarte</span>
                    </div>

                    <div className={`col-4 d-flex justify-content-center align-items-center ${styles.customTitle}`}>
                        <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>50%</span>
                    </div>
                </div>
            </div>    
        </>
    )
}