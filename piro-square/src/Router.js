import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RouteWithNavFooter from './RouteWithNavFooter';
import Login from './pages/Login/Login';

const Router = () => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const getUser = () => {
  //     fetch('http://localhost:8000/auth/login/success', {
  //       method: 'GET',
  //       credentials: 'include',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Credentials': true,
  //       },
  //     })
  //       .then(response => {
  //         if (response.status === 200) return response.json();
  //         throw new Error('authentication has been failed!');
  //       })
  //       .then(resObject => {
  //         setUser(resObject.user);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };
  //   getUser();
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} /> */}
        <Route path="/*" element={<RouteWithNavFooter />} />
        {/* <Route
          path="/*"
          element={user ? <RouteWithNavFooter /> : <Navigate to ='/login' />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
