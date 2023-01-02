import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link className="link" to="/" id="logo">
          Seize
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="link" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="link" to="/work">
            Our Work
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact Us
          </Link>
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
  background-color: #23232d;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 767px) {
    //display: none;
  }

  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  h1 {
    .link {
      color: #ffd166;
      font-family: "Courgette", cursive;
      font-size: 1.5rem;
      font-weight: lighter;
    }
  }
  .link {
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
