import styled from "styled-components";

export const ThemeSwitcherBtn = styled.button`
  position: fixed;
  bottom: 1em;
  left: 1em;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: linear-gradient(
      95deg,
      #059dff 15%,
      #6549d5 45%,
      #e33fa1 75%,
      #fb5343
    )
    95%/200% 100%;
  backdrop-filter: blur(3px);
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 100;

  & svg {
    color: ${({ theme }) => theme.white};
    font-size: 1.8rem;
  }

  &:hover {
    background: linear-gradient(
        95deg,
        #059dff 15%,
        #6549d5 45%,
        #e33fa1 75%,
        #fb5343
      )
      95%/200% 100%;
    filter: brightness(125%);
  }
`;
