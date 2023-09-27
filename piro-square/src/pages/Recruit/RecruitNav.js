import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const MENU_LIST = [
  { id: 1, title: '스터디 모집', link: '/recruit-study' },
  { id: 2, title: '프로젝트 모집', link: '/recruit-project' },
  { id: 3, title: '채용 공고', link: '/recruit-company' },
];
const RecruitNav = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('');

  React.useEffect(() => {
    const matchingMenu = MENU_LIST.find(item =>
      location.pathname.startsWith(item.link),
    );
    if (location.pathname === '/') {
      setActiveMenu('');
    } else if (matchingMenu) {
      setActiveMenu(matchingMenu.link);
    }
  }, [location.pathname]);

  return (
    <Container>
      <Title>모집 / 공고</Title>
      <TopSection>
        <PostBtn>글쓰기</PostBtn>
        <Options>
          {MENU_LIST.map(item => (
            <Option
              key={item.id}
              to={item.link}
              className={activeMenu === item.link ? 'active' : ''}
            >
              {item.title}
            </Option>
          ))}
        </Options>
      </TopSection>
    </Container>
  );
};
export default RecruitNav;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-top: 30px;
  font-family: 'InteropLight';
  font-size: 34px;
`;

const TopSection = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  width: 50rem;
  align-items: center;
`;

const PostBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: white solid 1px;
  color: white;
  padding: 6px;
  font-size: 16px;
  width: 7rem;
  height: 3rem;
  border-radius: 30px;
  background-color: black;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-right: 6rem;
`;

const Option = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 3rem;
  border: 1px solid #0bec12;
  border-radius: 30px;
  padding: 6px;
  margin: 0px 1rem;
  color: white;
  cursor: pointer;
  &.active {
    background-color: #0bec12;
    color: black;
  }

  &:hover {
    background-color: #0bec12;
    color: black;
  }
`;
