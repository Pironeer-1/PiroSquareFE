import React from 'react';
import styled from 'styled-components';
import MypageNav from '../MypageNav';

const MypageMyLike = () => {
  return (
    <Container>
      <MypageNav />
      <Title>나의 좋아요</Title>
    </Container>
  );
};
export default MypageMyLike;

const Container = styled.div``;
const Title = styled.h1``;
