export function DashboardTest() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-md-2 border-right border-secondary">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav flex-column">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Item 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Item 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Item 3</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>  
                        
                    </div>
        
                    <div className="col-md-6">
                        <h2>Postagens</h2>
                        
                    </div>
        
                    <div className="col-md-4 bg-light">
                        <h2>Mensagens</h2>
                    
                    </div>
                </div>
            </div>
        </>
    )
}