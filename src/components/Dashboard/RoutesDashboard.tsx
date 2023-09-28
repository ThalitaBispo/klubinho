import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SideBarRight } from '../SideBars/SideBarRight';
import { SideBarLeft } from '../SideBars/SideBarLeft';

import { Dashboard } from './Dashboard';
import styles from './Dashboard.module.css';

export function RoutesDashboard() {
    return(
        <>
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
        </>
    )
}