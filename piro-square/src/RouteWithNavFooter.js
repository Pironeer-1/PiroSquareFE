import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Free from './pages/Free/Free';
import Mypage from './pages/Mypage/Mypage';
import Question from './pages/Question/Question';
import Anounce from './pages/Announce/Announce';
import Study from './pages/Recruit/Study/Study';
import Project from './pages/Recruit/Project/Project';
import Company from './pages/Recruit/Company/Company';
import Write from './pages/Write/Write';

const RouteWithNavFooter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/free" element={<Free />} />
        <Route path="/my-page" element={<Mypage />} />
        <Route path="/question" element={<Question />} />
        <Route path="/recruit-study" element={<Study />} />
        <Route path="/recruit-project" element={<Project />} />
        <Route path="/recruit-company" element={<Company />} />
        <Route path="/anounce" element={<Anounce />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </>
  );
};

export default RouteWithNavFooter;
