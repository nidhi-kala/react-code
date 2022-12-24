import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;
}

body{
  background: #000917;
  font-family: 'Inter', sans-serif;
}

button{
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #ffd166;
  color: #e5e5e5;
  transition: all 0.2s ease;
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
h4{
  font-weight: bold;
  
}
span{
  font-weight: bold;
  color: #ffd166;
}

a{
  font-size:1rem;
}

p{
  padding: 3rem 0rem;
  color: #e5e5e5;
  font-size: 1.4rem;
  line-height: 150%;
}


`;

export default GlobalStyles;
