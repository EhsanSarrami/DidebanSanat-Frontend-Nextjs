import styled from "styled-components";

export const ProductListContainer = styled.section`
  flex-direction: column;
`;

export const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 3.5em;
  margin-top: 5em;
`;