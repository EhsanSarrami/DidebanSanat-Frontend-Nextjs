import styled from "styled-components";

export const NavbarTogglerWrapper = styled.button`
  width: 2rem;
  height: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: 0;
  display: none;
  @media (max-width: 992px) {
    display: flex;
  }

  @media (max-width: 576px) {
    width: 1.8rem;
    height: 1.6rem;
  }

  .navbar-toggler__line {
    width: 100%;
    height: 3px;
    background: ${(props) =>
      props.sticky ? props.theme.textPrimary : props.theme.white};

    &:nth-child(1) {
      transform: translateY(0.7rem);
    }

    &:nth-child(3) {
      transform: translateY(-0.7rem);
    }
  }
`;
