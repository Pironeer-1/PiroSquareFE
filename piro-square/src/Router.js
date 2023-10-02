import React, { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteWithNavFooter from './RouteWithNavFooter';
import Login from './pages/Login/Login';
import { AuthContext } from './context/auth-context';

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  // fetch(`http://192.168.0.52:8000/session`)
  //   .then(response => {
  //     if (response.ok) {
  //       return response.json();
  //     }
  //     throw new Error('Network response was not ok');
  //   })
  //   .then(data => {
  //     if (data.user) {
  //       setUser(data.user);
  //       console.log(data.user);
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Fetch request failed:', error);
  //   });

  // console.log(user);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<RouteWithNavFooter />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default Router;
