import styled from "styled-components";

const HomeSectionContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background: url("/image/Bg.jpg") no-repeat center center / cover fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px){
    height: calc(100vh + 5rem);
  }
  
  &::after {
    position: absolute;
    inset: 0;
    content: "";
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.theme.black};
    opacity: 0.5;

    @media (max-width: 768px){
      height: calc(100vh + 5rem);
    }
`;

export default HomeSectionContainer;
