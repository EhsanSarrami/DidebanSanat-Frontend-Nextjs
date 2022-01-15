import styled from "styled-components";

const TextFieldError = styled.p`
  font-size: 0.8rem;
  margin: 0.5em 0.4em;
  color: ${(props) => props.theme.redColor};
  font-weight: 700;
`;

export default TextFieldError;
