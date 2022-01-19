import styled from "styled-components";

export const TopSectionWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
  padding-bottom: 3em;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 4em;

    .top-section-col {
      justify-content: center;
      align-items: center;
      text-align: center;

      .section-col-row {
        justify-content: center;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

export const TopSectionCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: auto;

  &.namad-col {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      align-items: flex-start;
    }
  }

  .section-col__title {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.textPrimary};
    margin-bottom: 0.4em;
  }

  .section-col__subtitle {
    font-size: 0.8rem;
    font-weight: 700;
    color: ${(props) => props.theme.textSecoundary};
  }

  .section-col-row {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1.4em;

    .col-row__icon {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      overflow: hidden;
      padding: 1em;

      &:not(:last-child) {
        margin-left: 1.2em;
      }

      & svg {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.textPrimary};
        z-index: 10;
      }

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        height: 100%;
        background: ${(props) => props.theme.primaryColor};
        transform-origin: center;
        transform: scale(0);
        transition: transform 0.4s ease;
        border-radius: 50%;
      }

      &:hover {
        &::before {
          transform: scale(1);
        }
      }
    }
  }

  .section-col__link,
  .section-col__text {
    font-size: 0.9rem;
    font-weight: 700;
    color: ${(props) => props.theme.textSecoundary};
    padding: 0.4em 0;
  }

  .section-col__link {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      left: auto;
      bottom: -0.1rem;
      background: ${(props) => props.theme.primaryColor};
      width: 0;
      height: 2px;
      transition: 0.3s;
      right: 0;
      transition: 0.3s;
    }

    &:hover {
      color: ${(props) => props.theme.primaryColor};

      &::after {
        width: 100%;
        left: 0;
        right: auto;
      }
    }
  }

  .section-col__image {
    background: ${(props) => props.theme.white};
    padding: 1.5em;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
