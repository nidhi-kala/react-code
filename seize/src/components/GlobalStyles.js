import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;
}

body{
  background: #000814;
}

button{
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #ffd166;
  color: white;
  transition: all 0.3s ease;
  &:hover{
    background-color: #ffd166;
    color: white;
  }
}
`;

export default GlobalStyles;
