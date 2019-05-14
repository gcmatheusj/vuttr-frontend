import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    @import url('https://rsms.me/inter/inter.css');
    font-family: 'Inter';
    background: #170C3A;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #FFF;
  }
`;

export const AutoContainer = styled.div`
  position: static;
  width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
`;
