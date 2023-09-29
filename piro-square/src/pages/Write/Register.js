import React from 'react';
import styled from 'styled-components';

const Register = () => {
  return (
    <Container>
      <RegisterBtn>등록하기</RegisterBtn>
    </Container>
  );
};
export default Register;

const Container = styled.div`
  margin-top: 4rem;
  margin-left: auto;
`;

const RegisterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: #0bec12 solid 2px;
  color: ${props => props.theme.colors.green};
  margin-left: 5px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 18px;
  width: 7rem;
  height: 3rem;
  border-radius: 30px;
  background-color: black;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.green};
    color: black;
  }
`;
