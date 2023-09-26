import React from 'react';
import styled from 'styled-components';

const Recruit = () => {
  return (
    <Container>
      <Title>모집 / 공고</Title>
    </Container>
  );
};
export default Recruit;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-top: 30px;
  font-family: 'InteropLight';
  font-size: 34px;
`;
