import styled from "styled-components";
import { About } from "../styles";
import { LayoutGroup } from "framer-motion";
import Toggle from "./Toggle";
import { fade, scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={scrollReveal} animate={controls} ref={element}>
      <h2>
        Need to know more? <span>FAQ</span>{" "}
      </h2>
      <LayoutGroup type="crossfade">
        <Toggle title="How do I start?">
          <div className="question">
            <div layout className="answer" variants={fade}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cumque, error
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="What will my day look like?">
          <div className="question">
            <div className="answer">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cumque, error
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="What products do your offer?">
          <div className="question">
            <div className="answer">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cumque, error
              </p>
            </div>
          </div>
        </Toggle>

        <Toggle title="What payment methods do you accept?">
          <div className="question">
            <div className="answer">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cumque, error
              </p>
            </div>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }

  h2 {
    font-weight: lighter;
    padding-bottom: 2rem;
  }

  .faq-line {
    background-color: #c4c4c4;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    cursor: pointer;
    padding: 1rem 0rem;
  }

  /* answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  } */
`;

export default FaqSection;
