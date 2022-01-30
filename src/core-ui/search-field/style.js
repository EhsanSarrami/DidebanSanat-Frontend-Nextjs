import styled from "styled-components";

export const SearchFieldWrapper = styled.div`
  width: 100%;
  height: 55px;
  padding: 0.6em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.textQuaternary};
  margin-top: ${(props) => props.mgTop && props.mgTop};

  .search-field-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    cursor: pointer;

    & svg {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.textPrimary};
    }
  }
`;

export const SearchFieldInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 1.1rem;
  padding-bottom: 0.2em;
  background: transparent;
  color: ${({ theme }) => theme.textPrimary};

  &::placeholder {
    color: ${(theme) => theme.textQuaternary};
    font-weight: 700;
  }
`;
