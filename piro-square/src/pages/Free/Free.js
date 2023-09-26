import React from 'react';
import styled from 'styled-components';

const Free = () => {
  return (
    <Container>
      <Title>자유게시판</Title>
    </Container>
  );
};
export default Free;

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
