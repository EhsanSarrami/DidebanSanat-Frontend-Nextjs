import styled from "styled-components";

export const OverlayWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  text-align: center;
  margin-top: 90px;

  .overlay__title {
    font-size: 3rem;
    line-height: 4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.white};
  }

  .overlay__subtitle {
    font-size: 1.8rem;
    color: ${(props) => props.theme.textQuaternary};
    margin-top: 0.5em;
  }

  @media (max-width: 375px) {
    .overlay__title {
      font-size: 3rem;
    }

    .overlay__subtitle {
      font-size: 1.6rem;
    }
  }
`;
