import styled from "styled-components";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import { About, Description, Hide, Image } from "../styles";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServiceSection = () => {
  const [element, controls] = useScroll();
  return (
    <Service variants={scrollReveal} animate={controls} ref={element}>
      <Description>
        <h2>
          High <span>quality</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Lenses</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Economical</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Team work</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img
          src={
            //"https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            //"https://images.unsplash.com/photo-1551332772-f6bc95b9ed1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            "https://images.unsplash.com/photo-1534669740902-e09e38a6a29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cover&w=400&h=600&q=100"
          }
          alt=""
        />
      </Image>
    </Service>
  );
};

const Service = styled(About)`
  display: flex;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 767px) {
    display: block;
    padding: 1rem;
    text-align: center;
    overflow-x: hidden;
  }

  /* Media Query for Tablets Ipads portrait mode */
`;
const Cards = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, auto);

  @media (max-width: 767px) {
    display: block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem auto;
    margin: auto auto;
    text-align: center;
    overflow-x: hidden;
  }
`;
const Card = styled.div`
  flex-basis: auto;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
    @media (max-width: 767px) {
    }
  }
`;
export default ServiceSection;
