import styled from "styled-components";

export const ProductDetailContainer = styled.section`
  flex-direction: column;
`;

export const ProductDetailWrapper = styled.div`
  flex-direction: column;
  .product-name {
    width: 1024px;
    max-width: 100%;
    font-size: 1.4rem;
    margin-bottom: 1em;
    color: ${(props) => props.theme.textSecoundary};
  }
`;
