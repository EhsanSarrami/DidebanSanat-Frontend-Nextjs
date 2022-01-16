import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${({ theme }) => theme.bgTertiary};
  padding-bottom: 2em;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) -20px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  .product-card-image {
    position: relative;
    width: 100%;
    height: 241px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    & img {
      transition: all 0.5s ease;

      @media (max-width: 1200px) {
        height: 322px;
      }

      @media (max-width: 992px) {
        height: 240px;
      }

      @media (max-width: 768px) {
        height: 340px;
      }

      @media (max-width: 450px) {
        height: 290px;
      }

      @media (max-width: 375px) {
        height: 230px;
      }
    }

    &:hover {
      & img {
        transform: scale(1.1);
      }
    }
  }

  .product-card__name {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.textPrimary};
    margin-top: 0.8em;
    transition: all 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }

  .product-card__category {
    font-size: 1rem;
    color: ${(props) => props.theme.textSecoundary};
    margin-top: 0.2em;
  }
`;
