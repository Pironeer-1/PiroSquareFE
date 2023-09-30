import React from 'react';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import WriteTopSection from '../WriteTopSection/WriteTopSection';
import Register from '../Register';
import Quil from '../Quil';
import DueDate from './DueDate';

const WriteCompany = () => {
  return (
    <Container>
      <Title>채용 / 공고</Title>
      <WriteTopSection />
      <SubInfoSection>
        <DueDate />
      </SubInfoSection>
      <QuilContainer>
        <Quil />
      </QuilContainer>
      <Register />
    </Container>
  );
};

export default WriteCompany;

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
