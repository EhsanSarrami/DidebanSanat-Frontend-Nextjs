import styled from "styled-components";

export const LatestProductsCardWrapper = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bgTertiary};
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;

  .latest-products-card__image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.6s ease;
  }

  .latest-products-card__name {
    width: 100%;
    height: 35px;
    background: ${({ theme }) => theme.bgSenary};
    color: ${({ theme }) => theme.textPrimary};
    backdrop-filter: blur(3px);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5em 0;
    font-size: 1.6rem;
    font-weight: 900;
    transition: 0.6s ease;

    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }

  &:hover {
    .latest-products-card__image {
      transform: scale(1.4) rotate(15deg);
    }
    .latest-products-card__name {
      height: 100%;
    }
  }
`;
