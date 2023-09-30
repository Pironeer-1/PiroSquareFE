import React, { useState } from 'react';
import styled from 'styled-components';

const PersonnelInput = () => {
  const [count, setCount] = useState(1);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Container>
      <PersonnelLabel>모집 인원수</PersonnelLabel>
      <DecreaseBtn onClick={onDecrease} disabled={count === 1}>
        -
      </DecreaseBtn>
      <Personnel>{count}</Personnel>
      <IncreaseBtn onClick={onIncrease}> + </IncreaseBtn>
    </Container>
  );
};
export default PersonnelInput;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.black};
  width: 16.5rem;
  height: 3rem;
  border-radius: 30px;
`;

const PersonnelLabel = styled.label`
  margin-right: 1rem;
  font-size: 18px;
`;

const DecreaseBtn = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-radius: 5px;
  background-color: ${props => (props.disabled ? '#ccc' : '#0bec12')};
  color: black;
  &:hover {
    cursor: pointer;
  }
`;

const IncreaseBtn = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.green};
  color: black;
  &:hover {
    cursor: pointer;
  }
`;

const Personnel = styled.div`
  margin: 1rem;
  font-size: 20px;
  width: 1rem;
`;
