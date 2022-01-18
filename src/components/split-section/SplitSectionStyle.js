import styled from "styled-components";

export const SplitSectionWrapper = styled.section`
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 992px) {
    flex-direction: column;
  }

  .split-section-image {
    position: relative;
    width: 46%;
    height: 350px;
    border-radius: 8px;
    overflow: hidden;

    @media (max-width: 992px) {
      width: 100%;
      height: 550px;
      order: 1;
    }

    @media (max-width: 768px) {
      height: 350px;
    }

    @media (max-width: 576px) {
      height: 300px;
    }

    @media (max-width: 576px) {
      height: 280px;
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
