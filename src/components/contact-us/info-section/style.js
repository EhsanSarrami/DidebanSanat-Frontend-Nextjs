import styled from "styled-components";

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3em;
  border-radius: 10px;
  background: ${(props) => props.theme.bgTertiary};
  box-shadow: rgba(0, 0, 0, 0.1) -20px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  transition: 0.7s;

  &:hover {
    transform: translateY(-1em);
  }

  & svg {
    color: ${(props) => props.theme.primaryColor};
    font-size: 2.2rem;
  }

  .info-card__title {
    color: ${({ theme }) => theme.textPrimary};
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 0.6em;
  }

  .info-card-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 1.8em;
    .card-body__text {
      color: ${(props) => props.theme.textSecoundary};
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        color: ${(props) => props.theme.primaryColor};
      }
    }
  }
`;
