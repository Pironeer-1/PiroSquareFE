import React, { useState } from 'react';
import styled from 'styled-components';

const LikeBtn = ({ initialLike, likeAmount }) => {
  const [isLike, setIsLike] = useState(initialLike);
  const [currentLikeAmount, setCurrentLikeAmount] = useState(likeAmount || 0);

  const handleLikeToggle = newLikeStatus => {
    if (newLikeStatus) {
      setCurrentLikeAmount(currentLikeAmount + 1);
    } else {
      setCurrentLikeAmount(currentLikeAmount - 1);
    }
    setIsLike(newLikeStatus);
  };

  const handleLike = () => {
    const newLikeStatus = !isLike;
    handleLikeToggle(newLikeStatus);
  };

  const isLikeImg = isLike
    ? '/images/Question/arrow_g.png'
    : '/images/Question/arrow.png';

  return (
    <Container onClick={handleLike}>
      <LikeImg src={isLikeImg} alt={isLike ? 'Liked' : 'Not Liked'} />
      <LikeAmount className={isLike ? 'greenWord' : 'grayWord'}>
        {currentLikeAmount}
      </LikeAmount>
    </Container>
  );
};

export default LikeBtn;

const Container = styled.div`
  cursor: pointer;
`;

const LikeImg = styled.img`
  margin-right: 10px;
  width: 25px;
`;

const LikeAmount = styled.span`
  font-family: 'InteropBold';
  &.greenWord {
    color: ${props => props.theme.colors.green};
  }

  &.grayWord {
    color: ${props => props.theme.colors.grayLight};
  }
`;
