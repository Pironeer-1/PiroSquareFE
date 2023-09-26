import React from 'react';
import styled from 'styled-components';

const Question = () => {
  return (
    <Container>
      <Title>질문</Title>
    </Container>
  );
};
export default Question;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 30px;
  font-family: 'InteropLight';
  font-size: 34px;
`;
