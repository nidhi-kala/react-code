import styled from "styled-components";
import { About } from "../styles";
import { useState } from "react";
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Need to know more? <span>FAQ</span>{" "}
      </h2>
      <div className="question">
        <h1>How do I start?</h1>
        <Toggle>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
              error
            </p>
          </div>
        </Toggle>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h1>What will my day look like?</h1>
        <Toggle>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
              error
            </p>
          </div>
        </Toggle>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h1>What products do your offer?</h1>
        <Toggle>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
              error
            </p>
          </div>
        </Toggle>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h1>What payment methods do you accept?</h1>
        <Toggle>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
              error
            </p>
          </div>
        </Toggle>
        <div className="faq-line"></div>
      </div>
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
    padding: 3rem 0rem;
  }

  answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
