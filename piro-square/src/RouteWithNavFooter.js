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
import WriteFree from './pages/Write/WriteFree/WriteFree';
import WriteQuestion from './pages/Write/WriteQuestion/WriteQuestion';
import WriteCompany from './pages/Write/WriteRecruit/WriteCompany';
import WriteStudy from './pages/Write/WriteRecruit/WriteStudy';
import WriteProject from './pages/Write/WriteRecruit/WriteProject';

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
        <Route path="/write/free" element={<WriteFree />} />
        <Route path="/write/question" element={<WriteQuestion />} />
        <Route path="/write/recruit/study" element={<WriteStudy />} />
        <Route path="/write/recruit/company" element={<WriteCompany />} />
        <Route path="/write/recruit/project" element={<WriteProject />} />
      </Routes>
    </>
  );
};

export default RouteWithNavFooter;
