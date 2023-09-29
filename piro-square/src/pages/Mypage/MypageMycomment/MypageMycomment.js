import React from 'react';
import styled from 'styled-components';
import MypageNav from '../MypageNav';

const MypageMycomment = () => {
  return (
    <Container>
      <MypageNav />
      <Title>나의 댓글</Title>
    </Container>
  );
};
export default MypageMycomment;

const Container = styled.div``;
const Title = styled.h1``;
