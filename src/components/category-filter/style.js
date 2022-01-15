import styled from "styled-components";

export const CategoryFilterList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2em;
`;

export const CategoryFilterItem = styled.li`
  color: ${(props) =>
    props.active ? props.theme.white : props.theme.textSecoundary};
  margin: 0.8em 0.3em;
  cursor: pointer;

  & a {
    background: ${(props) =>
      props.active ? props.theme.primaryColor : "transparent"};
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5em 1em;
    border-radius: 6px;
    color: ${(props) =>
      props.active ? props.theme.white : props.theme.textSecoundary};
  }
`;
