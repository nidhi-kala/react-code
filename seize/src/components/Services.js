import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const Services = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High<span> quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficent</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Lenses</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="" />
              <h3>Cost-effective</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Team work</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img
          src={
            "https://images.unsplash.com/photo-1534669740902-e09e38a6a29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cover&w=400&h=600&q=80"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default Services;
