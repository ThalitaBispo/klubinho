import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SideBarRight } from '../SideBars/SideBarLeft';
import { SideBarLeft } from '../SideBars/SideBarRight';

import { Dashboard } from './Dashboard';
import styles from './Dashboard.module.css';

//import { DashboardTest } from './Dashboardteste';

export function RoutesDashboard() {
    return(
        /*<>
            <div>
                <div className={styles.divisao1}><SideBarRight /></div>
                    <div className={styles.divisao2}>
                        <BrowserRouter>
                            <main>
                                <Routes>
                                    <Route path="/dashboard" element={<Dashboard />} />
                                </Routes>
                            </main>
                        </BrowserRouter>
                    </div>
                <div className={styles.divisao3}><SideBarLeft /></div>

                <div className={styles.clear}></div>
            </div>
        </>*/

        <>
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-md-2 bg-light">
                        <SideBarRight />
                    </div>
                    
                        <div className="col-md-6">
                            <BrowserRouter>
                                <main>
                                    <Routes>
                                        <Route path="/dashboard" element={<Dashboard />} />
                                    </Routes>
                                </main>
                            </BrowserRouter>
                        </div>
        
                    <div className="col-md-4 bg-light">
                        <SideBarLeft />
                    </div>
                </div>
            </div>
        </>
    )
}