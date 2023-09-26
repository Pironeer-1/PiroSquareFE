import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Dots from './Dots.js';
import Footer from '../../components/Footer/Footer';

import './Main.css';

const DIVIDER_HEIGHT = 5;

function Main() {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    const wheelHandler = e => {
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지

          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지

          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(3);
        } else {
          // 현재 3페이지

          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(3);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지

          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지

          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(1);
        } else {
          // 현재 3페이지

          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(2);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener('wheel', wheelHandler, {
      passive: true,
    });
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, []);
  return (
    <>
      <Container ref={outerDivRef} className="outer">
        <Dots scrollIndex={scrollIndex} />
        <Section className="inner">피로그래머들을 위한 커뮤니티</Section>
        <div className="divider"></div>
        <Section className="inner">
          <img src="images/Nav/piro_logo.png" style={{ width: '200px' }} />
        </Section>
        <div className="divider"></div>
        <Section className="inner">PIROSQUARE</Section>
      </Container>{' '}
      <Footer />
    </>
  );
}

export default Main;

const Container = styled.div`
  background-color: ${props => props.theme.colors.grayLight};
  height: 100vh;
  overflow-y: auto;
`;

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-top: -50px;
  color: ${props => props.theme.colors.green};
  font-family: 'InteropLight';
`;
