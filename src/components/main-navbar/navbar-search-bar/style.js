import styled from "styled-components";

export const NavbarSearchBarContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.bgFadeA};
  backdrop-filter: blur(2px);
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: ${(props) =>
    props.isOpen
      ? "all 0.4s ease"
      : "opacity 0.4s ease 0.4s, visibility 0s ease 0.6s"};
  }
  cursor: pointer;
`;

export const NavbarSearchBarWrapper = styled.div`
  width: 450px;
  height: 100vh;
  position: absolute;
  right: 0;
  padding: 2.2em;
  background: ${({ theme }) => theme.bgPrimary};
  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  transition: ${(props) =>
    props.isOpen ? "transform 0.4s ease 0.4s" : "transform 0.4s ease 0.2s"};
  }
  cursor: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavbarSearchBarHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & h2 {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.textPrimary};
  }

  .navbar-searchbar-times {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: 0;
    position: absolute;
    top: 2em;
    left: 1.4em;
    cursor: pointer;

    & svg {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.textPrimary};
    }
  }
`;
