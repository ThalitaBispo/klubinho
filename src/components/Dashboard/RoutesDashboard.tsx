import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SideBarRight } from '../SideBars/SideBarLeft';
import { SideBarLeft } from '../SideBars/SideBarRight';

import { Dashboard } from './Dashboard';
import { Enquete } from '../Enquete/Enquete';
import styles from './Dashboard.module.css';
import { Profile } from '../Profile/Profile';

//import { DashboardTest } from './Dashboardteste';

export function RoutesDashboard() {
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-md-3" style={{ position: 'sticky', top: 0, height: '100vh' }}>
                        <SideBarRight />
                    </div>
                    
                        <div className="col-md-5" style={{ maxHeight: '50%', overflowY: 'auto' }}>
                            <div className="row">
                                <div className="col-md-6 mt-4">
                                    <b>Clube dos ++</b>
                                </div>
                                <div className={`col-md-6 mt-4 ${styles.menu}`}>
                                    <a href="#" className="nav-link">
                                    <span className="material-symbols-outlined">notifications</span>
                                    </a>
                                </div>
                            </div>
                            <hr style={{ borderTop: '2px solid gray' }} />
                            <BrowserRouter>
                                <main>
                                    <Routes>
                                        <Route path="/dashboard" element={<Dashboard />} />
                                        <Route path="/enquete" element={<Enquete />} />
                                        <Route path="/profile" element={<Profile />} />
                                    </Routes>
                                </main>
                            </BrowserRouter>
                        </div>
        
                    <div className="col-md-4" style={{ position: 'sticky', top: 0, height: '100vh' }}>
                        <SideBarLeft />
                    </div>
                </div>
            </div>
        </>
    )
}