import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBtn from '../../components/Button/FilterBtn/FilterBtn';
import QuestionCard from './QuestionCard';

const Question = () => {
  const [isRightPosition, setIsRightPosition] = useState(false);

  const handleFilterBtnClick = () => {
    setIsRightPosition(!isRightPosition);
  };
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch('/data/questionData.json')
      .then(response => response.json())
      .then(result => {
        setQuestions(result);
      });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = questions.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const totalPageCount = Math.ceil(questions.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPageCount; i++) {
    pageNumbers.push(
      <PageNumber
        key={i}
        onClick={() => handlePageChange(i)}
        className={i === currentPage ? 'active' : ''}
      >
        {i}
      </PageNumber>,
    );
  }

  const availabilityClassName = isRightPosition ? 'greenWord' : 'grayWord';
  return (
    <>
      <Container>
        <Title>질문</Title>
        <TopSection>
          <SearchBar />
          <FilterBox>
            <FilterBtn
              onClick={handleFilterBtnClick}
              isRightPosition={isRightPosition}
            />
            <FilterName className={availabilityClassName}>
              {isRightPosition ? '해결' : '전체'}
            </FilterName>
          </FilterBox>

          <AskBtn>질문하기</AskBtn>
        </TopSection>
        <BottomSection>
          {currentItems.map(question => {
            return (
              <QuestionCard
                key={question.id}
                id={question.id}
                title={question.title}
                username={question.username}
                created_at={question.created_at}
                answers_amount={question.answers_amount}
                is_user_like={question.is_user_like}
                is_solved={question.is_solved}
                like_amount={question.like_amount}
              />
            );
          })}
        </BottomSection>
      </Container>
      <PaginationContainer>{pageNumbers}</PaginationContainer>
    </>
  );
};
export default Question;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 55rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-top: 30px;
  font-family: 'InteropLight';
  font-size: 34px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  width: 55rem;
`;

const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 3rem;
  margin: auto;
`;

const FilterName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  color: ${props => props.theme.colors.grayLight};
  &.greenWord {
    color: ${props => props.theme.colors.green};
  }

  &.grayWord {
    color: ${props => props.theme.colors.grayLight};
  }
`;

const AskBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: white solid 1px;
  color: white;
  padding: 6px;
  font-size: 16px;
  width: 7rem;
  height: 2.4rem;
  border-radius: 30px;
  margin-left: 1rem;
  background-color: black;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const PaginationContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-left: 1rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  &.active {
    background-color: ${props => props.theme.colors.green};
    color: black;
  }
`;
