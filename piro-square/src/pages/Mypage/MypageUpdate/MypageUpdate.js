import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MypageNav from '../MypageNav';

const MypageUpdate = () => {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    fetch('/data/userData.json')
      .then(response => response.json())
      .then(result => {
        setInformation(result);
      });
  }, []);

  return (
    <Container>
      <MypageNav />
      <MainInformation>
        <InformationBox>
          <InfoTitle>이름</InfoTitle>
          <InfoContent>{information.name}</InfoContent>
        </InformationBox>
        <InformationBox>
          <InfoTitle>기수</InfoTitle>
          <InfoContent>{information.year}</InfoContent>
        </InformationBox>
      </MainInformation>
      <SubInformation>
        <ImgSection>
          <ProfileImgSection>
            <ProfileImg src={information.image} />
          </ProfileImgSection>{' '}
          <ImgBtn>이미지 변경</ImgBtn>
          <ImgLabel>이미지 비율 11:14 권장</ImgLabel>
        </ImgSection>

        <SubInfoSection>
          <NickName>
            <NickNameBox>
              <NickNameTitle>닉네임</NickNameTitle>
              <NickNameContent placeholder={information.nickname} />
            </NickNameBox>
            <NickNameLabel>10자 이하</NickNameLabel>
          </NickName>
          <Introduce>
            <IntroduceTitle>소개</IntroduceTitle>
            <IntroduceContent placeholder={information.introduce} />
            <IntroduceLabel>40자 이하</IntroduceLabel>
          </Introduce>
        </SubInfoSection>
      </SubInformation>
      <UpdateBtn>수정하기</UpdateBtn>
    </Container>
  );
};
export default MypageUpdate;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainInformation = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem auto;
  width: 55rem;
`;

const InformationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  font-size: 17px;
  margin-left: 30px;
`;

const InfoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3rem;
  background-color: ${props => props.theme.colors.black};
`;

const InfoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3rem;
  background-color: ${props => props.theme.colors.grayDark};
`;

const SubInformation = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px solid #0bec12;
  width: 55rem;
`;

const ImgSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgLabel = styled.label`
  color: ${props => props.theme.colors.grayLight};
  margin-top: 2px;
  margin-left: 5rem;
`;

const ProfileImgSection = styled.div`
  margin-top: 2rem;
  margin-left: 5rem;
  width: 11rem;
  height: 14rem;
  background-color: ${props => props.theme.colors.grayDark};
`;

const ProfileImg = styled.img`
  width: 11rem;
  height: 14rem;
`;
const SubInfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const NickName = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

const NickNameBox = styled.div`
  display: flex;
`;

const NickNameTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3rem;
  background-color: ${props => props.theme.colors.black};
`;

const NickNameContent = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: black;
  font-size: 16px;
  width: 15rem;
  height: 3rem;
  padding-left: 1rem;
  background-color: ${props => props.theme.colors.grayLight};
`;

const NickNameLabel = styled.label`
  color: ${props => props.theme.colors.grayLight};
  margin-top: 2px;
  margin-left: auto;
`;

const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
`;

const IntroduceTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3rem;
  background-color: ${props => props.theme.colors.black};
`;

const IntroduceContent = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: black;
  font-size: 16px;
  width: 23rem;
  height: 5rem;
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.grayLight};
`;

const IntroduceLabel = styled.label`
  color: ${props => props.theme.colors.grayLight};
  margin-top: 2px;
  margin-left: auto;
`;

const ImgBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3rem;
  border: none;
  margin-left: 5rem;
  font-size: 16px;
  background-color: ${props => props.theme.colors.black};
`;

const UpdateBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: #0bec12 solid 2px;
  color: ${props => props.theme.colors.green};
  margin: 1rem auto;
  padding: 5px;
  font-size: 20px;
  width: 10rem;
  height: 4rem;
  border-radius: 30px;
  background-color: black;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.green};
    color: black;
  }
`;