import styled from "styled-components";

export const ProductsCategoriesListContainer = styled.section`
  flex-direction: column;
  margin-top: 12.5em;
`;

export const ProductsCategoriesListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-gap: 3.5em;
  margin-top: 5em;

  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;
