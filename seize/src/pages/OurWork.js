import styled from "styled-components";
import { motion } from "framer-motion";
import {
  fade,
  photoAnim,
  PageAnimation,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import ScrollTop from "../components/ScrollTop";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work variants={PageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Wedding</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>

        <Hide>
          <motion.img
            variants={photoAnim}
            src={
              "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="wedding photo"
          />
        </Hide>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls}>
        <h2>The Proposal</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>

        <Hide>
          <motion.img
            variants={photoAnim}
            src={
              "https://images.pexels.com/photos/1483740/pexels-photo-1483740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="proposal"
          />
        </Hide>
      </Movie>
      <Movie ref={element2} variants={fade} animate={controls2}>
        <h2>The Celebration</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>

        <Hide>
          <motion.img
            variants={photoAnim}
            src={
              "https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="celebration"
          />
        </Hide>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 3rem 5rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 5rem;
  .line {
    height: 0.5rem;
    background-color: #ffd166;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  h2 {
    color: #e2e2e2;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//frame animation

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0%;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #ad55ff;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #ffdb8e;
`;

export default OurWork;
