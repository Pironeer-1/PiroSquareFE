import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
  return (
    <Container>
      <SearchBox>
        <SearchInput placeholder="제목으로 검색하세요" />
        <SearchImg src="/images/Search/search.png" />
      </SearchBox>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div``;

const SearchBox = styled.div`
  display: grid;
  grid-template-columns: 28rem 3rem;
  width: 32rem;
  height: 3rem;
  background-color: #a3a3a3;
  border-radius: 30px;
  margin-right: auto;
`;

const SearchInput = styled.input`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 26rem;
  height: 2.4rem;
  font-size: 18px;
  color: black;
  background-color: transparent;
  border: none;
`;

const SearchImg = styled.img`
  width: 32px;
  height: 32px;
  margin: auto;
  cursor: pointer;
`;
