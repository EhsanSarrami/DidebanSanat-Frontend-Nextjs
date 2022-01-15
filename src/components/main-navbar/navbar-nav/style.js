import styled, { keyframes } from "styled-components";

// nav item keyframe
const navItemAnimIn = keyframes`
0% {
    opacity: 0;
    top: -2%;
}

100% {
    opacity: 1;
    top: 0;
}
`;

export const NavbarNavWrapper = styled.nav`
  overflow: hidden;
  @media (max-width: 992px) {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    z-index: 1001;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
    opacity: ${(props) => (props.open ? "1" : "0")};
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
    transition: ${(props) =>
      props.open
        ? "all 0.2s ease"
        : "opacity 0.5s ease 0.5s, visibility 0.2s ease 0.6s"};
  }
`;

export const NavbarNavList = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    position: fixed;
    left: 0;
    right: 0;
    height: 100%;
    width: 240px;
    max-width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.bgPrimary};
    box-shadow: 8px 0px 25px rgba(0, 0, 0, 0.7);
    transition: ${(props) =>
      props.open ? "all 0.3s ease 0.5s" : "all 0.8s ease"};
    transform: translateX(${(props) => (props.open ? "0" : "100%")});
  }

  .nav-list__item {
    position: relative;
    @media (max-width: 992px) {
      width: 100%;
      margin: 0.4em 0;
      opacity: ${(props) => (props.open ? "0" : "1")};
      animation: ${(props) => props.open && navItemAnimIn} 0.4s ease-in forwards;

      &:nth-child(1) {
        animation-delay: 0.4s;
      }

      &:nth-child(2) {
        animation-delay: 0.6s;
      }

      &:nth-child(3) {
        animation-delay: 0.8s;
      }

      &:nth-child(4) {
        animation-delay: 1s;
      }

      &:nth-child(5) {
        animation-delay: 1.2s;
      }

      &:nth-child(6) {
        animation-delay: 1.4s;
      }

      &:nth-child(7) {
        animation-delay: 1.6s;
      }

      &:nth-child(8) {
        animation-delay: 1.8s;
      }
    }
  }

  .list-item__link {
    font-size: 1.05rem;
    font-weight: 700;
    font-family: "faFont";
    padding: 0 0.7em;
    color: ${(props) =>
      props.sticky ? props.theme.textSecoundary : props.theme.white};
    transition: all 0.5s ease;

    &:hover {
      background: linear-gradient(
          95deg,
          #059dff 15%,
          #6549d5 45%,
          #e33fa1 75%,
          #fb5343
        )
        98%/200% 100%;
      -webkit-background-clip: text;
      background-clip: text;
    }

    @media (max-width: 992px) {
      width: 100%;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.textSecoundary};
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -0.4em;
      right: 0;
      left: 0;
      width: 100%;
      height: 0.5px;
      background: linear-gradient(
          95deg,
          #059dff 15%,
          #6549d5 45%,
          #e33fa1 75%,
          #fb5343
        )
        95%/200% 100%;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.5s ease;

      @media (max-width: 992px) {
        display: none;
      }
    }

    &:hover {
      -webkit-text-fill-color: transparent;
      &::after {
        transform: scaleX(1);
      }
    }
  }
`;

export const NavbarTimesBtn = styled.button`
  display: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;

  svg {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.textTertiary};
  }

  @media (max-width: 991px) {
    display: flex;
  }
`;
