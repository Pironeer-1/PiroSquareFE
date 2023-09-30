import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Paginator from '../../../components/Paginator/Paginator';
import Comment from '../../../components/Comment/Comment';

const FreeDetail = () => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch('/data/freeDetail.json')
      .then(response => response.json())
      .then(result => {
        setDetail(result);
      });
  }, []);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('/data/comments.json')
      .then(response => response.json())
      .then(result => {
        setComments(result);
      });
  }, []);

  return (
    <>
      <Container>
        <Title>{detail.title}</Title>
        <ContentBox>
          <ContentInfo>
            <UserName>{detail.username}</UserName>
            <Created>{detail.created_at}</Created>
          </ContentInfo>
          <ContentSection>{detail.content}</ContentSection>
        </ContentBox>
        <Comment comments={comments} />
      </Container>
      <Paginator />
    </>
  );
};

export default FreeDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-top: 2rem;
  font-family: 'InteropExtraLight';
`;

const ContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
`;

const UserName = styled.h2`
  font-size: 20px;
`;

const Created = styled.h2`
  color: ${props => props.theme.colors.grayLight};
`;

const ContentBox = styled.div`
  border-radius: 10px;
  margin-top: 2rem;
  background-color: ${props => props.theme.colors.grayDark};
`;

const ContentSection = styled.div`
  font-size: 18px;
  line-height: 1.6;
  word-break: break-all;
  padding: 2rem;
`;
