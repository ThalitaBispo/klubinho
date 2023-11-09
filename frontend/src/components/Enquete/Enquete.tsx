

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
                                <a href="#" className="btn btn-primary" style={{ backgroundColor: 'var(--purple)' }}>Votar</a>
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
                                <a href="#" className="btn btn-primary" style={{ backgroundColor: 'var(--purple)' }}>Votar</a>
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
                                <a href="#" className="btn btn-primary" style={{ backgroundColor: 'var(--purple)' }}>Votar</a>
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
                                <a href="#" className="btn btn-primary" style={{ backgroundColor: 'var(--purple)' }}>Votar</a>
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
                                <a href="#" className="btn btn-primary" style={{ backgroundColor: 'var(--purple)' }}>Votar</a>
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
                                <a href="#" className="btn btn-primary" style={{ backgroundColor: 'var(--purple)' }}>Votar</a>
                                <span className="btn" style={{ border: '1px solid', borderRadius: '10px', 
                                    padding: '0.5rem', color: 'var(--white)', backgroundColor: 'var(--purple)' }}>
                                    25%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>

            <div className="container">
                <div className="row mt-4 mb-4" style={{ padding: '1rem' }}>
                    <b style={{ fontSize: '1.5rem' }}>Votação</b>
                    <div className="col-md-6 d-flex flex-row mt-4">
                        <img
                        src="https://i.pinimg.com/564x/70/59/89/705989e782fdaa41034773229cb0d764.jpg"
                        alt="Imagem do livro"
                        className="img-fluid rounded align-self-start"
                        style={{ maxWidth: "70px" }}
                        />
                        <div className="mt-2" style={{ marginLeft: '1rem' }}>
                            <div className="d-block">The Hobbit</div>
                            <div className="d-block" style={{ color: '#5b6b77' }}>
                                J. R. R. Tolkien
                            </div>
                            <div className="p-1 mt-2"> 
                                <span style={{ border: '1px solid var(--purple)', borderRadius: '10px', padding: '0.5rem 2rem', color: 'var(--purple)' }}>
                                    10%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex flex-row mt-4">
                        <img
                        src="https://i.pinimg.com/564x/e3/a3/b7/e3a3b783afc53919e1adbd3e341b9508.jpg"
                        alt="Imagem do livro"
                        className="img-fluid rounded align-self-start"
                        style={{ maxWidth: "70px" }}
                        />
                        <div className="mt-2" style={{ marginLeft: '1rem' }}>
                            <div className="d-block">Jurassic Park</div>
                            <div className="d-block" style={{ color: '#5b6b77' }}>
                                Steven Spielberg
                            </div>
                            <div className="p-1 mt-2"> 
                                <span style={{ border: '1px solid var(--purple)', borderRadius: '10px', padding: '0.5rem 2rem', color: 'var(--purple)' }}>
                                    05%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex flex-row mt-4">
                        <img
                        src="https://i.pinimg.com/564x/60/33/98/6033986b2b23a155f39e2c672fb14ecf.jpg"
                        alt="Imagem do livro"
                        className="img-fluid rounded align-self-start"
                        style={{ maxWidth: "70px" }}
                        />
                        <div className="mt-2" style={{ marginLeft: '1rem' }}>
                            <div className="d-block">Harry Potter</div>
                            <div className="d-block" style={{ color: '#5b6b77' }}>
                                J. K. Rowling
                            </div>
                            <div className="p-1 mt-2"> 
                                <span style={{ border: '1px solid', borderRadius: '10px',
                                    padding: '0.5rem 2rem', color: 'var(--white)', backgroundColor: 'var(--purple)' }}>
                                        25%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex flex-row mt-4">
                        <img
                        src="https://i.pinimg.com/564x/1f/e7/bc/1fe7bc42b8c9df8f3853927e3fa055f8.jpg"
                        alt="Imagem do livro"
                        className="img-fluid rounded align-self-start"
                        style={{ maxWidth: "70px" }}
                        />
                        <div className="mt-2" style={{ marginLeft: '1rem' }}>
                            <div className="d-block">O Mágico de Oz</div>
                            <div className="d-block" style={{ color: '#5b6b77' }}>
                                J. R. R. Tolkien
                            </div>
                            <div className="p-1 mt-2"> 
                                <span style={{ border: '1px solid', borderRadius: '10px',
                                    padding: '0.5rem 2rem', color: 'var(--white)', backgroundColor: 'var(--purple)' }}>
                                    12%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex flex-row mt-4">
                        <img
                        src="https://i.pinimg.com/564x/bf/3a/55/bf3a55db13b6bf3bb695cf3312717131.jpg"
                        alt="Imagem do livro"
                        className="img-fluid rounded align-self-start"
                        style={{ maxWidth: "70px" }}
                        />
                        <div className="mt-2" style={{ marginLeft: '1rem' }}>
                            <div className="d-block">The Hobbit</div>
                            <div className="d-block" style={{ color: '#5b6b77' }}>
                                J. R. R. Tolkien
                            </div>
                            <div className="p-1 mt-2"> 
                                <span style={{ border: '1px solid', borderRadius: '10px',
                                    padding: '0.5rem 2rem', color: 'var(--white)', backgroundColor: 'var(--purple)' }}>
                                    28%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex flex-row mt-4">
                        <img
                        src="https://i.pinimg.com/564x/5d/02/0a/5d020a8da051459854bd0d9a23893033.jpg"
                        alt="Imagem do livro"
                        className="img-fluid rounded align-self-start"
                        style={{ maxWidth: "70px" }}
                        />
                        <div className="mt-2" style={{ marginLeft: '1rem' }}>
                            <div className="d-block">The Hobbit</div>
                            <div className="d-block" style={{ color: '#5b6b77' }}>
                                J. R. R. Tolkien
                            </div>
                            <div className="p-1 mt-2"> 
                                <span style={{ border: '1px solid', borderRadius: '10px',
                                    padding: '0.5rem 2rem', color: 'var(--white)', backgroundColor: 'var(--purple)' }}>
                                    20%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
}