import styled from "styled-components";

export const SplitSectionWrapper = styled.section`
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 992px) {
    flex-direction: column;
  }

  .split-section-image {
    width: 46%;

    & img {
      width: 100%;
      border-radius: 8px;
    }

    @media (max-width: 992px) {
      width: 100%;
      order: 1;
    }
  }
`;

export const SplitSectionContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & h4 {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${(props) => props.theme.textPrimary};
  }

  & p {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${(props) => props.theme.textSecoundary};
    margin-top: 1.8em;
    text-align: justify;
  }

  @media (max-width: 992px) {
    width: 100%;
    order: 2;
    margin-top: 4em;
  }
`;
