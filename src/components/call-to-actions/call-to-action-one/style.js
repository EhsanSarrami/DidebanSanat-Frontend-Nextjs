import styled from "styled-components";

export const CallToActionOneContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url(${(props) => `/image/CallToAction/${props.bgImage}`}) no-repeat center center / cover
    fixed;
  margin-top: ${(props) => props.mgTop && "12em"};
  margin-bottom: ${(props) => props.mgBottom && "12em"};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: ${(props) => props.theme.black};
    opacity: 0.7;
  }
`;

export const CallToActionOneWrapper = styled.div`
  flex-direction: column;
  text-align: center;
  z-index: 2;
  color: ${(props) => props.theme.white};

  .call-to-action__title {
    font-size: 2.4rem;
    margin-bottom: 0.4em;
    font-weight: 700;
  }

  .call-to-action__desc {
    font-size: 1.5rem;
    margin-bottom: 0.4em;
    font-weight: 400;
  }

  & a {
    margin-top: 2em;
  }
`;
