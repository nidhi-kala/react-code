import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const { pathname } = useLocation();
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
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/about" ? "30%" : "0%" }}
          />
        </li>
        <li>
          <Link className="link" to="/work">
            Our Work
          </Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "30%" : "0%" }}
          />
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact Us
          </Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "30%" : "0%" }}
          />
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
    flex-direction: column;
    padding: 2rem 1rem;
    ul {
      padding: 1rem 2rem;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      li {
        padding: 0;
      }
    }
    #logo {
      display: inline-block;
      padding: 1rem;
    }
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

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #ffd166;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 65%;
  @media (max-width: 767px) {
    left: 25%;
  }
`;

export default Nav;
