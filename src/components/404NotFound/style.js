import styled from "styled-components";

export const NotFoundWrapper = styled.main`
  width: 100vw;
  height: 700px;
  background: url("/image/404-NotFound.jpg") no-repeat center center / cover;
    no-repeat center center / cover;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const NotFoundOverlay = styled.div`
  width: 992px;
  max-width: 95%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  flex-direction: column;
  padding: 2.8em;
  & h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    margin-bottom: 0.3em;
  }
  a {
    font-size: 1.1rem;
  }
  @media (max-width: 576px) {
    & h2 {
      font-size: 1.8rem;
      margin-bottom: 0.8em;
    }
    a {
      font-size: 0.9rem;
      margin-bottom: 2em;
    }
  }
`;
