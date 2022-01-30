import styled from "styled-components";

export const NavbarLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .navbar-logo-divider {
    width: 2px;
    height: 24px;
    margin: 0 1em;
    background: ${(props) =>
      props.sticky ? props.theme.textPrimary : props.theme.white};
  }

  @media (max-width: 576px) {
    .navbar-logo-img {
      & img {
        width: 120px !important;
        height: 40px !important;
      }
    }
  }
`;

export const NavbarBtn = styled.button`
  background: transparent;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 0.5em;

  & svg {
    color: ${(props) =>
      props.sticky ? props.theme.textPrimary : props.theme.white};
    font-size: 1.5rem;
  }

  @media (max-width: 576px) {
    margin: 0 0.4em;

    & svg {
      font-size: 1.4rem;
    }
  }
`;
