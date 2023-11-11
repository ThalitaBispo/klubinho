import React, { useEffect, useState } from 'react';
import { RoutesLogin } from './components/Login/RoutesLogin';
import { RoutesDashboard } from './components/Dashboard/RoutesDashboard';
import Cookies from 'js-cookie'; // Certifique-se de ter a biblioteca js-cookie instalada

import './global.module.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    // Verificar se há um token no cookie
    const token = Cookies.get('token');

    // Definir o estado com base na presença do token
    setIsLoggedIn(!!token);
  }, []);

  // Aguarde até que a verificação seja concluída
  if (isLoggedIn === null) {
    return <div>Verificando...</div>;
  }

  return (
    <>
      {isLoggedIn ? (
        // Se o usuário estiver logado, exibir o painel de controle
        <RoutesDashboard />
      ) : (
        // Se o usuário não estiver logado, exibir a tela de login
        <RoutesLogin />
      )}
    </>
  );
}

export default App;
