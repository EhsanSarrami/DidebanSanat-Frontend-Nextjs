import styled from "styled-components";

export const EventsCardWrapper = styled.div`
  display: flex;
  height: 100%;
  background: ${({ theme }) => theme.bgTertiary};
  overflow: hidden;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  .events-card-image {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    position: relative;

    & img {
      transition: all 0.5s ease;
    }

    &:hover {
      & img {
        transform: scale(1.1);
      }
    }
  }

  .events-card-content {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 22px 30px 30px;
    .events-card__date {
      font-size: 0.9rem;
      font-weight: 700;
      color: ${(props) => props.theme.textSecoundary};
      margin-top: 0.6em;
    }

    .events-card__title {
      font-size: 1.2rem;
      font-weight: 700;
      color: ${({ theme }) => theme.textPrimary};
      margin-top: 0.4em;
      transition: 0.5s;

      &:hover {
        color: ${(props) => props.theme.primaryColor};
      }
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;

    .events-card-image,
    .events-card-content {
      width: 100%;
    }

    .events-card-image {
      height: 320px;
    }
  }

  @media (max-width: 485px) {
    .events-card-image {
      height: 280px;
    }
  }

  @media (max-width: 375px) {
    .events-card-image {
      height: 240px;
    }
  }
`;
