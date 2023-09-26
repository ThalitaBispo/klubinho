import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { Login } from './Login';
import { LoginWelcome } from './LoginWelcome';
import { LoginCriarClube } from './LoginCriarClube';
import { LoginEntrarClube } from './LoginEntrarClube';
import { LoginSolicitacao } from './LoginSolicitacao';
import styles from './Login.module.css'

export function RouterLogin() {
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
                                    <Route path="/bemvindo" element={<LoginWelcome />} />
                                    <Route path="/criarclube" element={<LoginCriarClube />} />
                                    <Route path="/entrarclube" element={<LoginEntrarClube />} />
                                    <Route path="/solicitacao" element={<LoginSolicitacao />} />
                                </Routes>
                            </main>
                        </BrowserRouter>
                    </div>
            </div> 
        </>
    )
}