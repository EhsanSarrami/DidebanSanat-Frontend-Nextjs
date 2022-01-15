import styled from "styled-components";

const TextAreaFieldInput = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 250px;
  min-height: 250px;
  max-height: 280px;
  border: 2px solid ${(props) => props.theme.borderPrimary};
  border-radius: 10px;
  font-size: 1rem;
  padding: 1em;
  color: ${(props) => props.theme.textSecoundary};
  background: transparent;
  font-family: "faFont", "Poppins";
  font-weight: 700;
`;

export default TextAreaFieldInput;
