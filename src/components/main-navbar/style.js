import styled from "styled-components";

export const MainNavbarContainer = styled.header`
  width: 100%;
  position: ${(props) => (props.sticky ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${(props) => (props.sticky ? "1em 0" : "1.2em 0")};
  border-bottom: solid hsla(0, 0%, 100%, 0.1);
  border-width: 1px;
  background: ${(props) =>
    props.sticky ? props.theme.bgSecoundary : "transparent"};
  transition: all 0.4s ease;
  box-shadow: 0 0 15px
    ${(props) => (props.sticky ? "rgba(0,0,0,0.3)" : "transparent")};
`;

export const MainNavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
