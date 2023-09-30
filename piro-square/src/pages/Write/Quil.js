import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Quil = () => {
  const [value, setValue] = useState('');
  const quillRef = useRef(null);

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'font',
    'size',
    'header',
    'color',
    'background',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];
  return (
    <Container>
      <QuilContainer>
        <ReactQuill
          style={{
            height: '35rem',
            width: '55rem',
            backgroundColor: '#2C2D2E',
          }}
          ref={quillRef}
          theme="snow"
          value={value}
          modules={modules}
          formats={formats}
          onChange={setValue}
          placeholder="내용을 입력하세요."
        />
      </QuilContainer>
    </Container>
  );
};

export default Quil;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55rem;
  margin: 0 auto;
`;

const QuilContainer = styled.div`
  & span .ql-picker {
    color: #06c;
  }

  & .ql-editor {
    font-size: 18px;
    background-color: ${props => props.theme.colors.black};
    border: none;
    color: white;
  }

  & .ql-toolbar ql-snow {
    border: none;
    background-color: ${props => props.theme.colors.black};
  }

  & .ql-container ql-snow {
    border: none;
  }

  & .ql-editor.ql-blank::before {
    color: ${props => props.theme.colors.grayLight};
  }

  & .ql-snow .ql-picker-options .ql-picker-item {
    color: #06c;
  }
`;
