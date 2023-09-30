import React from 'react';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import WriteTopSection from '../WriteTopSection/WriteTopSection';
import Register from '../Register';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

const WriteQuestion = () => {
  return (
    <Container>
      <Title>질문하기</Title>
      <WriteTopSection />
      <QuilContainer>
        <Editor
          height="600px"
          placeholder="질문을 작성해주세요"
          previewStyle="vertical"
          language="ko-KR"
          theme="dark"
        />
      </QuilContainer>
      <Register />
    </Container>
  );
};

export default WriteQuestion;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55rem;
  min-height: 50rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: 'InteropLight';
  font-size: 34px;
`;

const QuilContainer = styled.div`
  margin-top: 2rem;
`;
