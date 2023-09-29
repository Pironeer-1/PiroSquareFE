import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const WRITE_MENU = [
  { id: 1, title: '자유게시판', link: '/write/free' },
  { id: 2, title: '질문', link: '/write/question' },
  { id: 3, title: '모집/채용 - 스터디 모집', link: '/write/recruit/study' },
  { id: 4, title: '모집/채용 - 프로젝트 모집', link: '/write/recruit/project' },
  { id: 5, title: '모집/채용 - 채용 공고', link: '/write/recruit/company' },
];

const WriteTopSection = () => {
  const [title, setTitle] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const matchedMenuItem = WRITE_MENU.find(
      menuItem => location.pathname === menuItem.link,
    );

    if (matchedMenuItem) {
      setSelectedBoard(matchedMenuItem.link);
    } else {
      setSelectedBoard('');
    }
  }, [location.pathname]);

  const handleTitleChange = e => {
    setTitle(e.currentTarget.value);
    const inputValue = e.currentTarget.value;
    if (inputValue.length <= 40) {
      setTitle(inputValue);
    }
  };

  const handleBoardChange = e => {
    const confirmation = window.confirm(
      '현재까지 작성한 내용이 사라질 수도 있습니다. 게시판 이동을 선택하시겠습니까?',
    );

    if (confirmation) {
      const newSelectedBoard = e.target.value;
      setSelectedBoard(newSelectedBoard);
      navigate(newSelectedBoard);
    } else {
      e.target.value = selectedBoard;
    }
  };
  return (
    <Container>
      <TopSection>
        <TitleSection>
          <TitleInput
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="제목을 입력해주세요 (최대 40자)"
          />
        </TitleSection>
        <FilterSection>
          <SelectBoard onChange={handleBoardChange} value={selectedBoard}>
            {WRITE_MENU.map(board => (
              <option key={board.id} value={board.link}>
                {board.title}
              </option>
            ))}
          </SelectBoard>
        </FilterSection>
      </TopSection>
    </Container>
  );
};

export default WriteTopSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55rem;
  margin: 0 auto;
`;

const TopSection = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 55rem;
`;

const TitleSection = styled.div`
  display: flex;
  width: 36rem;
  height: 3rem;
  background-color: ${props => props.theme.colors.grayDark};
  border-radius: 30px;
  margin-right: auto;
`;

const TitleInput = styled.input`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 34rem;
  height: 2.4rem;
  font-size: 18px;
  color: white;
  background-color: transparent;
  border: none;
`;

const FilterSection = styled.div``;

const SelectBoard = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 14rem;
  height: 3rem;
  font-size: 16px;
  color: black;
  background-color: ${props => props.theme.colors.grayLight};
  border: none;
  border-radius: 30px;
  outline: none;
  padding: 0 1rem;
`;
