import React from 'react';
import CommentSection from './CommentSection/CommentSection';
import CommentRegister from './CommentRegister/CommentRegister';

const Comment = ({ comments }) => {
  return (
    <>
      <CommentSection comments={comments} />
      <CommentRegister />
    </>
  );
};

export default Comment;
