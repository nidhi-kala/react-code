import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a href="#" id="logo">
          Seize
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 10rem;
  margin: auto;
  justify-content: space-between;
  background-color: #00112e;
  h1 {
    a {
      color: #ffd166;
      font-family: "Courgette", cursive;
      font-size: 1.5rem;
      font-weight: lighter;
    }
  }
  a {
    text-decoration: none;
    color: #ccc;
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
  li {
    padding-left: 8rem;
    position: relative;
  }
`;

export default Nav;
