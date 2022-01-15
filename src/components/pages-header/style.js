import styled from "styled-components";
import Confige from "../../services/Config.json";

export const PagesHeaderContainer = styled.section`
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  height: 100vh;
  background: ${(props) =>
      props.staticBg
        ? `url(${`/image/Header/${props.staticBg}`})`
        : `url(${`${Confige.HostMediaEndpoint}/${props.dynamicBg}`})`}
    no-repeat center center / cover fixed;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px) grayscale(50%);
  }
`;

export const PagesHeaderWrapper = styled.div`
  flex-direction: column;
  text-align: center;
  z-index: 10;

  .pages-header__title {
    font-size: 3rem;

    @media (max-width: 375px) {
      font-size: 2.4rem;
    }
  }

  .pages-header-diretion-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
  }

  .pages-header-diretion__list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .diretion-list__item {
    position: relative;
    padding: 0 1.2em;

    &:last-child {
      user-select: none;
      pointer-events: none;

      & .diretion-list__link {
        opacity: 0.7;
      }
    }

    &:not(:first-child) {
      &::after {
        position: absolute;
        content: "";
        top: 50%;
        background-color: ${({ theme }) => theme.textTertiary};
        width: 5px;
        height: 5px;
        border-radius: 100%;
        opacity: 0.5;
        right: -3px;
      }
    }
  }

  .diretion-list__link {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.textTertiary};

    @media (max-width: 375px) {
      font-size: 1.1rem;
    }
  }
`;
