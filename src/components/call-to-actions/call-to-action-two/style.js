import styled from "styled-components";

export const CallToActionTwoContainer = styled.div`
  background: ${({ theme }) => theme.bgSecoundary};
`;

export const CallToActionTwoWrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.borderSecoundary};
  padding: 6em 2em !important;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .call-to-action-two__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: justify;

    & img {
      width: 9rem;
    }

    & p {
      font-size: 1rem;
      color: ${(props) => props.theme.textSecoundary};
      font-weight: 700;
      margin-top: 1.4em;

      @media (max-width: 992px) {
        margin-bottom: 2em;
      }
    }
  }
`;