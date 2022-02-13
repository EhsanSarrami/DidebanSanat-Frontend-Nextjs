import styled from "styled-components";

const StyledLinkWrapper = styled.a`
  width: auto;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: center;
  padding: ${(props) => props.space};
  color: ${(props) =>
    props.color ? props.theme[props.color] : props.theme.white};
  background: ${(props) =>
    props.isBtn
      ? "linear-gradient(95deg, #059dff 15%, #6549d5 45%, #e33fa1 75%, #fb5343) 95%/200% 100%"
      : "transparent"};
  text-shadow: ${(props) =>
    props.isBtn ? "1px 1px 6px rgb(0 0 0 / 25%)" : "none"};
  cursor: pointer;
  border: 0;
  border-radius: ${(props) => (props.notRound ? "0" : "8px")};
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${(props) =>
      props.isBtn
        ? "linear-gradient(95deg, #059dff 15%, #6549d5 45%, #e33fa1 75%, #fb5343) 95%/200% 100%"
        : "transparent"};

    filter: ${(props) => (props.isBtn ? "brightness(125%)" : "")};
  }

  & svg {
    font-size: 1.8rem;
    margin-right: 0.4em;
  }
`;

export default StyledLinkWrapper;
