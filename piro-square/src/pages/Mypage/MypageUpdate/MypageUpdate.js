import React from 'react';
import styled from 'styled-components';
import MypageNav from '../MypageNav';

const MypageUpdate = () => {
  return (
    <Container>
      <MypageNav />
      <Title>회원정보 수정</Title>
    </Container>
  );
};
export default MypageUpdate;

const Container = styled.div``;
const Title = styled.h1``;
