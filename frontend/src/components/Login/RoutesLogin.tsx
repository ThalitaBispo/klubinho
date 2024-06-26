import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { Login } from './Login';
import { LoginWelcome } from './LoginWelcome';
import { LoginCriarClube } from './LoginCriarClube';
import { LoginEntrarClube } from './LoginEntrarClube';
import { LoginPesquisarClube } from './LoginPesquisarClube';
import { LoginSolicitacao } from './LoginSolicitacao';
import styles from './Login.module.css'

export function RoutesLogin() {
    return(
        <>
            <div className={styles.container}>
                <span className={styles.textLogo}>KLUBINHOS</span>

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
                                <Route path="/pesquisarclube" element={<LoginPesquisarClube />} />
                            </Routes>
                        </main>
                    </BrowserRouter>
                </div>
            </div> 
        </>
    )
}