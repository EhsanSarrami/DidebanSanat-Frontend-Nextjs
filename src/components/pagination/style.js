import styled from "styled-components";

export const PaginationWrapper = styled.nav`
  width: 768px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7.5em;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const NavigateBtn = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${(props) => props.active && "none"};

  & svg {
    color: ${(props) =>
      props.active ? props.theme.textTertiary : props.theme.textPrimary};
    font-size: 2rem;
  }
`;

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  direction: ltr;
`;

export const PaginationItem = styled.li`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) =>
    props.active ? props.theme.textPrimary : props.theme.textTertiary};
  pointer-events: ${(props) => props.active && "none"};
  margin: 0 0.6em;
  cursor: pointer;
`;
