import React from 'react';
import styled from 'styled-components';
import MypageNav from '../MypageNav';

const MypageMypost = () => {
  return (
    <Container>
      <MypageNav />
      <Title>나의 글</Title>
    </Container>
  );
};
export default MypageMypost;

const Container = styled.div``;
const Title = styled.h1``;
