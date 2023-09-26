import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import InteropExtraLight from './fonts/Interop-ExtraLight.otf';
import InteropLight from './fonts/Interop-Light.otf';
import InteropRegular from './fonts/Interop-Regular.otf';
import InteropSemiBold from './fonts/Interop-SemiBold.otf';
import InteropBold from './fonts/Interop-Bold.otf';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'InteropExtraLight';
    src: url(${InteropExtraLight});
  }

  @font-face {
    font-family: 'InteropLight';
    src: url(${InteropLight});
  }

  @font-face {
    font-family: 'InteropRegular';
    src: url(${InteropRegular});
  }

  @font-face {
    font-family: 'InteropSemiBold';
    src: url(${InteropSemiBold});
  }

  @font-face {
    font-family: 'InteropBold';
    src: url(${InteropBold});
  }

  * {
    box-sizing: border-box;
    background-color: #000;
    color : #fff;
      font-family: 'InteropMedium';
  }


  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
