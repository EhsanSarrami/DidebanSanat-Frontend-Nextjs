import styled from "styled-components";

export const MainFooterContainer = styled.footer`
  width: 100vw;
  background: ${({ theme }) => theme.bgSecoundary};
  padding-top: 8em;
`;

export const MainFooterWrapper = styled.div`
  flex-direction: column;
`;
