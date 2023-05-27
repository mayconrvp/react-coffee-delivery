import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple}
  }

  body{
    
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
    /* padding-left: 10rem;
    padding-right: 10rem; */
    
  }

  body,input,textarea,button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    @media (max-width: 768px) {
      padding: 0!important;
      font-size: 70%;
    }
  }


  
`;
