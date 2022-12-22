import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;
}

body{
  background: #000e24;
}

button{
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #ffd166;
  color: #eaeaea;
  transition: all 0.2s ease-in-out;
  &:hover{
    background-color: #ffd166;
    color: #000e24;
  }
}

h2{
  font-weight: lighter;
  font-size: 4rem;
}

h3{
  color: #eaeaea;
}

p{
  padding: 3rem 0rem;
  color: #cccccc;
  font-size: 1.4rem;
}

`;

export default GlobalStyles;
