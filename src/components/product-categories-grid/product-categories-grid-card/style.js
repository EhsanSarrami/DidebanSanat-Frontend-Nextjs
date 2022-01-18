import styled from "styled-components";

export const ProductsCategoriesListCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bgTertiary};
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;

  .products-categories-list-card__image {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.6s ease;
  }

  .products-categories-list-card__name {
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
    .products-categories-list-card__image {
      transform: scale(1.4) rotate(15deg);
    }
    .products-categories-list-card__name {
      height: 100%;
    }
  }
`;
