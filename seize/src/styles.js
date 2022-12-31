import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 5rem;
  color: #e5e5e5;
  z-index: 2;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 10rem;
  padding-left: 4rem;
  h2 {
    font-weight: lighter;
  }
  z-index: 2;
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 80%;
    min-height: 80vh;
    object-fit: cover;
  }
  z-index: 2;
`;

export const Hide = styled.div`
  overflow: hidden;
`;
