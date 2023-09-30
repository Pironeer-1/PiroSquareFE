import React from 'react';
import styled from 'styled-components';

const CommentRegister = () => {
  return (
    <WriteComment>
      <CommentInput placeholder="댓글을 작성해주세요" />
      <CommentArrow>
        <PostImg src="/images/Button/arrow.png" />
      </CommentArrow>
    </WriteComment>
  );
};
export default CommentRegister;

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
