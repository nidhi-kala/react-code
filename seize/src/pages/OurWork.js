import styled from "styled-components";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>The Wedding</h2>
        <div className="line"></div>
        <Link>
          <img
            src={
              "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="wedding photo"
          />
        </Link>
      </Movie>
      <Movie>
        <h2>The Proposal</h2>
        <div className="line"></div>
        <Link>
          <img
            src={
              "https://images.pexels.com/photos/1483740/pexels-photo-1483740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="proposal"
          />
        </Link>
      </Movie>
      <Movie>
        <h2>The Celebration</h2>
        <div className="line"></div>
        <Link>
          <img
            src={
              "https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="celebration"
          />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default OurWork;
