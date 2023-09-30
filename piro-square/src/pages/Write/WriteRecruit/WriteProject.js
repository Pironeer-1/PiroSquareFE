import React from 'react';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import WriteTopSection from '../WriteTopSection/WriteTopSection';
import Register from '../Register';
import Quil from '../Quil';
import PersonnelInput from './PersonnelInput';
import DueDate from './DueDate';

const WriteProject = () => {
  return (
    <Container>
      <Title>프로젝트 모집</Title>
      <WriteTopSection />
      <SubInfoSection>
        <PersonnelInput />
        <DueDate />
      </SubInfoSection>
      <QuilContainer>
        <Quil />
      </QuilContainer>
      <Register />
    </Container>
  );
};

export default WriteProject;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55rem;
  min-height: 50rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: 'InteropLight';
  font-size: 34px;
`;

const QuilContainer = styled.div`
  margin-top: 2rem;
`;

const SubInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  width: 55rem;
`;
