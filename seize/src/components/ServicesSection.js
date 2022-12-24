import styled from "styled-components";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import { About, Description, Hide, Image } from "../styles";

const ServiceSection = () => {
  return (
    <Service>
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
              <h3>Cost-effective</h3>
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
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: #e7e7e7;
      color: #000917;
      padding: 1rem;
    }
  }
`;
export default ServiceSection;
