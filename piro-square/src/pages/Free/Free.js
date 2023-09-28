import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBtn from '../../components/Button/FilterBtn/FilterBtn';
import FreeCard from './FreeCard';
import { useNavigate } from 'react-router-dom';

const Free = () => {
  const [isRightPosition, setIsRightPosition] = useState(false);

  const handleFilterBtnClick = () => {
    setIsRightPosition(!isRightPosition);
  };

  const navigate = useNavigate();

  const handleWriteBtnClick = () => {
    navigate('/write');
  };

  const [frees, setFrees] = useState([]);
  useEffect(() => {
    fetch('/data/FreeData.json')
      .then(response => response.json())
      .then(result => {
        setFrees(result);
      });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = frees.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const totalPageCount = Math.ceil(frees.length / itemsPerPage);
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
        <Title>자유게시판</Title>
        <TopSection>
          <SearchBar />
          <FilterBox>
            <FilterBtn
              onClick={handleFilterBtnClick}
              isRightPosition={isRightPosition}
            />
            <FilterName className={availabilityClassName}>
              {isRightPosition ? '인기순' : '최신순'}
            </FilterName>
          </FilterBox>

          <WriteBtn onClick={handleWriteBtnClick}>글쓰기</WriteBtn>
        </TopSection>
        <BottomSection>
          {currentItems.map(Free => {
            return (
              <FreeCard
                key={Free.id}
                id={Free.id}
                title={Free.title}
                username={Free.username}
                created_at={Free.created_at}
                answers_amount={Free.answers_amount}
                is_user_like={Free.is_user_like}
                like_amount={Free.like_amount}
                thumbnail={Free.thumbnail}
              />
            );
          })}
        </BottomSection>
      </Container>
      <PaginationContainer>{pageNumbers}</PaginationContainer>
    </>
  );
};
export default Free;

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
  justify-content: space-between;
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

const WriteBtn = styled.button`
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
