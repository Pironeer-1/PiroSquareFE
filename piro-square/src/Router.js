import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteWithNavFooter from './RouteWithNavFooter';
import Login from './pages/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<RouteWithNavFooter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
