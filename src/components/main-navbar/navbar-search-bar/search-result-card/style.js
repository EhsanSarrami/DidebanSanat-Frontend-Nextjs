import styled from "styled-components";

export const SearchResultCardWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 0.6em;
  display: flex;
  align-items: center;
  box-shadow: 3px 2px 15px ${({ theme }) => theme.boxShadowPrimary};

  .search-results-card__image {
    position: relative;
    width: 90px;
    height: 80px;
    border-radius: 8px;
    overflow: hidden;
  }

  .search-results-card_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 1.5em;

    & h4 {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 0.6em;
      color: ${({ theme }) => theme.textPrimary};
    }

    & h5 {
      font-size: 0.8rem;
      font-weight: 900;
      color: ${({ theme }) => theme.textSecoundary};
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5em;

    .search-results-card__image {
      width: 100%;
      height: 250px;
    }

    .search-results-card_info {
      padding: 0 0;
      margin-top: 1.5em;

      & h4 {
        font-size: 1.2rem;
      }

      & h5 {
        font-size: 0.9rem;
      }
    }
  }
`;
