import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
      <LoginImg src="images/Nav/piro_logo.png" />
      <LoginTitle>PIROSQUARE</LoginTitle>
      <LoginBtn>
        <BtnImg src="images/Login/btnD.png" />
      </LoginBtn>
      <LoginBottom>
        <LoginInfo>아직 회원이 아니라면?</LoginInfo>
        <Contact>문의하기</Contact>
      </LoginBottom>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
`;

const LoginImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

const LoginTitle = styled.h1`
  font-family: 'InteropLight';
  font-size: 36px;
  margin-top: 2rem;
`;

const LoginBtn = styled.div`
  margin-top: 2rem;
`;

const BtnImg = styled.img`
  width: 15rem;
  cursor: pointer;
`;

const LoginBottom = styled.div`
  margin-top: 1rem;
  display: flex;
`;

const LoginInfo = styled.div`
  color: ${props => props.theme.colors.grayLight};
`;

const Contact = styled.div`
  margin-left: 5px;
  color: ${props => props.theme.colors.green};
  cursor: pointer;
`;
