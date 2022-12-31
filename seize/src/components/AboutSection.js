import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Enjoy the ride,we will </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span> Seize the moment</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>for you to cherish!</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Need a photographer or videographer? <br /> We're here for you. Let's
          work together
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={
            "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            // "https://images.unsplash.com/photo-1620403724159-40363e84a155?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=800&q=80"
          }
          alt="man with camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
