import styled from "styled-components";

export const TextFieldInput = styled.input`
  width: 100%;
  height: 50px;
  border: 2px solid ${(props) => props.theme.borderPrimary};
  border-radius: 10px;
  font-size: 0.9rem;
  padding: 0 0.8em;
  color: ${(props) => props.theme.textSecoundary};
  background: transparent;
  font-family: "faFont", "Poppins";
  font-weight: 700;
  outline: 0;

  &:focus {
    border-color: ${({ theme }) => theme.primaryColor};
  }

  & ::placeholder {
    color: ${(props) => props.theme.textSecoundary};
  }
`;
