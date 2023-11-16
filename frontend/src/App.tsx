import React, { useEffect, useState } from 'react';
import { RoutesLogin } from './components/Login/RoutesLogin';
import { RoutesDashboard } from './components/Dashboard/RoutesDashboard';
import Cookies from 'js-cookie';

import './global.module.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const token = Cookies.get('token');
    const user_id = Cookies.get('user_id');
    const club_id = Cookies.get('club_id');

    // Verificar se há um token, user_id e club_id válidos
    const isLoggedIn = !!token && !!user_id && club_id !== null && club_id !== undefined;

    setIsLoggedIn(isLoggedIn);
  }, []);

  if (isLoggedIn === null) {
    return <div>Verificando...</div>;
  }

  return (
    <>
      {isLoggedIn ? (
        <RoutesDashboard />
      ) : (
        <RoutesLogin />
      )}
    </>
  );
}

export default App;
