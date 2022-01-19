import styled from "styled-components";

export const BottomSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2em 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;

  .bottom-section__text {
    font-size: 1rem;
    font-weight: 900;
    color: ${({ theme }) => theme.textPrimary};
  }

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;

    .bottom-section__text {
      &:nth-child(2) {
        margin-top: 0.8em;
      }
    }
  }
`;
