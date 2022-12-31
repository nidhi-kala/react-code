import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>Enjoy the ride, we will</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              <span>Seize the moment</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>for you to cherish!</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Need a photographer or videographer? We're here for you. Let's work
          together
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img
          src={
            "https://images.unsplash.com/photo-1620403724159-40363e84a155?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=800&q=80"
          }
          alt="man with camera"
        />
      </Image>
    </About>
  );
};

export default AboutSection;
