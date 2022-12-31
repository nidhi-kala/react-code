import styled from "styled-components";
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";

const OurWork = () => {
  return (
    <Work variants={PageAnimation} initial="hidden" animate="show" exit="exit">
      <Movie>
        <h2>The Wedding</h2>
        <div className="line"></div>
        <a
          href="https://vod-progressive.akamaized.net/exp=1672462244~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4078%2F27%2F695391782%2F3213941845.mp4~hmac=01617f6eb17527fe0c0e60e3e7aecac72d5e855259e74efcfc02aebd0837a157/vimeo-prod-skyfire-std-us/01/4078/27/695391782/3213941845.mp4"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={
              "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="wedding photo"
          />
        </a>
      </Movie>
      <Movie>
        <h2>The Proposal</h2>
        <div className="line"></div>
        <a
          //href="https://player.vimeo.com/video/438464723"
          href="https://vod-progressive.akamaized.net/exp=1672462776~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2692%2F17%2F438464723%2F1914425087.mp4~hmac=0e021589d8f236af6f9bc8346312448ec524da3375224af7a099d649a20612d9/vimeo-prod-skyfire-std-us/01/2692/17/438464723/1914425087.mp4"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={
              "https://images.pexels.com/photos/1483740/pexels-photo-1483740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="proposal"
          />
        </a>
      </Movie>
      <Movie>
        <h2>The Celebration</h2>
        <div className="line"></div>
        <a
          href="https://vod-progressive.akamaized.net/exp=1672449680~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4287%2F14%2F371435410%2F1541921537.mp4~hmac=6f32cd419a8f48b9c222f68e1c814d75483dabbd4d8ba890713c57571a4ed41b/vimeo-prod-skyfire-std-us/01/4287/14/371435410/1541921537.mp4"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={
              "https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="celebration"
          />
        </a>
      </Movie>
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

const Movie = styled.div`
  padding-bottom: 5rem;
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
