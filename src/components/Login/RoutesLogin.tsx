import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginForm } from './LoginForm';
import { Login } from './Login';
import styles from './Login.module.css'

export function RoutesLogin() {
    return(
        <>
            <div className={styles.container}>
                <span className={styles.textLogo}>KLUBINHO</span>

                    <div className={styles.login}>
                        <BrowserRouter>
                            <main>
                                <Routes>
                                    <Route path="/" element={<Login />} />
                                    <Route path="/cadastro" element={<LoginForm />} />
                                </Routes>
                            </main>
                        </BrowserRouter>
                    </div>
            </div> 
        </>
    )
}