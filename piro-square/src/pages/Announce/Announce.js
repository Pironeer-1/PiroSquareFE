import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AnnouncementCard from './AnnouncementCard';

const Announce = () => {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    fetch('/data/announce.json')
      .then(response => response.json())
      .then(result => {
        setAnnouncements(result);
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = announcements.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const totalPageCount = Math.ceil(announcements.length / itemsPerPage);
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

  return (
    <Container>
      <Title>공지</Title>
      <AnnouncementBox>
        {currentItems.map(announcement => {
          return (
            <AnnouncementCard
              key={announcement.id}
              id={announcement.id}
              title={announcement.title}
              username={announcement.username}
              created_at={announcement.created_at}
              sort={announcement.sort}
            />
          );
        })}
      </AnnouncementBox>
      <PaginationContainer>{pageNumbers}</PaginationContainer>
    </Container>
  );
};
export default Announce;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 3rem;
  font-family: 'InteropLight';
  font-size: 34px;
`;

const AnnouncementBox = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const PaginationContainer = styled.div`
  margin-top: 5rem;
  display: flex;
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
