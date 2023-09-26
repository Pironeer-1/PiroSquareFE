import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const NAV_LIST = [
  { id: 1, title: '자유게시판', link: '/free' },
  { id: 2, title: '질문', link: '/question' },
  { id: 3, title: '모집/채용', link: '/recruit' },
  { id: 4, title: '공지', link: '/anounce' },
];
const Nav = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('');

  React.useEffect(() => {
    const matchingMenu = NAV_LIST.find(item =>
      location.pathname.startsWith(item.link),
    );
    if (location.pathname === '/') {
      setActiveMenu(''); // '/' 인 경우, activeMenu를 빈 문자열로 설정
    } else if (matchingMenu) {
      setActiveMenu(matchingMenu.link);
    }
  }, [location.pathname]);
  return (
    <Container>
      <RightSection>
        <LogoSection to="/">
          <LogoImg src="/images/Nav/piro_logo.png" />
          <LogoPhrase>PIROSQUARE</LogoPhrase>
        </LogoSection>
        <MenuSection>
          {' '}
          {NAV_LIST.map(item => (
            <MenuList
              key={item.id}
              to={item.link}
              className={activeMenu === item.link ? 'active' : ''}
            >
              {item.title}
            </MenuList>
          ))}
        </MenuSection>
      </RightSection>
      <UserSection>
        <UserImg src="/images/Nav/sample_img.png" />
        <UserName>김피로</UserName>
      </UserSection>
    </Container>
  );
};
export default Nav;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RightSection = styled.div`
  display: flex;
  margin-left: 10px;
`;
const LogoSection = styled(Link)`
  display: flex;
  margin: 1rem;
`;

const LogoImg = styled.img`
  width: 2.2rem;
`;

const LogoPhrase = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-family: 'InteropExtraLight';
  margin-left: 1rem;
`;

const MenuSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  white-space: nowrap;
`;

const MenuList = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  margin: 0.5rem;
  padding: 0.5rem;
  font-family: 'InteropLight';
  color: white;
  border-bottom: ${({ active }) => (active ? '1px solid #0bec12' : 'none')};
  &.active {
    border-bottom: 1px solid #0bec12;
  }
  &:hover {
    border-bottom: 1px solid #0bec12;
    cursor: pointer;
  }
`;

const UserSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 3rem;
`;

const UserImg = styled.img`
  width: 1.2rem;
  margin-right: 0.5rem;
`;

const UserName = styled.div`
  white-space: nowrap;
  font-family: 'InteropLight';
`;
