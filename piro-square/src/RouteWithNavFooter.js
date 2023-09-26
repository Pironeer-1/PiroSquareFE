import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Free from './pages/Free/Free';
import Question from './pages/Question/Question';
import Recruit from './pages/Recruit/Recruit';
import Anounce from './pages/Announce/Announce';

const RouteWithNavFooter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/free" element={<Free />} />
        <Route path="/question" element={<Question />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/anounce" element={<Anounce />} />
      </Routes>
    </>
  );
};

export default RouteWithNavFooter;
