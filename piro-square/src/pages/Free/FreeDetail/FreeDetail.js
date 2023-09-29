import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
    <Container>
      <Title>{detail.title}</Title>
      <ContentBox>
        <ContentInfo>
          <UserName>{detail.username}</UserName>
          <Created>{detail.created_at}</Created>
        </ContentInfo>
        <ContentSection>{detail.content}</ContentSection>
      </ContentBox>
      <CommentSection>
        <CommentPerson>
          <PersonImg src="/images/Mypage/yuri.jpeg" />
        </CommentPerson>
        <CommentBox>
          <CommentInfo>
            <CommentUser>미키오</CommentUser>
            <CommentDate>2023.10.02</CommentDate>
          </CommentInfo>
          <CommentContent>멋져머셔젼ㅇ몃져멋져</CommentContent>
        </CommentBox>
      </CommentSection>
      <WriteComment>
        <CommentInput />
        <CommentArrow>
          <PostImg src="/images/Button/arrow.png" />
        </CommentArrow>
      </WriteComment>
    </Container>
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

const CommentSection = styled.div`
  margin-top: 2rem;
  display: flex;
`;

const CommentPerson = styled.div`
  margin-right: 2rem;
`;

const PersonImg = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.grayDark};
  border-radius: 10px;
  padding: 2rem;
  max-width: 45rem;
`;

const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CommentDate = styled.div`
  color: ${props => props.theme.colors.grayLight};
`;

const CommentUser = styled.div`
  font-family: 'InteropSemiBold';
`;

const CommentContent = styled.div`
  line-height: 1.3;
`;

const WriteComment = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  width: 50rem;
  height: 4rem;
  border-radius: 30px;
  background-color: ${props => props.theme.colors.grayDark};
`;

const CommentInput = styled.input`
  width: 44rem;
  margin-left: 1.5rem;
  height: 3.2rem;
  background-color: transparent;
  border: none;
  font-size: 18px;
`;

const CommentArrow = styled.button`
  margin-left: auto;
  margin-right: 0.5rem;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.colors.green};
  &:hover {
    cursor: pointer;
  }
`;

const PostImg = styled.img`
  width: 35px;
`;
