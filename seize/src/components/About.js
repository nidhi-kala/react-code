import home1 from "../img/home1.png";
const About = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2> We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>Dreams</span>
            </h2>
          </div>
          <div className="hide">come true</div>
        </div>
        <p>Have photography or videography ideas? Let's work together</p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="man with camera" />
      </div>
    </div>
  );
};

export default About;
