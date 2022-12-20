const About = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>I'm Nidhi, a Frontend Web Developer</h2>
          </div>
          <div className="hide">
            <h2>Convert your designs</h2>
          </div>
          <div className="hide">
            to <span>Code</span>
          </div>
        </div>
        <p>Let's work together</p>
        <button>Contact</button>
      </div>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cover&w=600&h=800&q=80"
          alt="laptop-image"
        />
      </div>
    </div>
  );
};

export default About;
