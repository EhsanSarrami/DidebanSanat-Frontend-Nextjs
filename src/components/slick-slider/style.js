import styled from "styled-components";

export const SliderContainer = styled.div`
  margin-top: ${(props) => (props.mgTop ? props.mgTop : "")};
  margin-bottom: ${(props) => (props.mgBottom ? props.mgBottom : "")};
`;
