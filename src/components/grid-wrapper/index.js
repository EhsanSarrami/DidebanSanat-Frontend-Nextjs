import styled, { css } from "styled-components";

const GridWrapper = styled.div`
  width: ${(props) => props.width && props.width};
  display: grid;
  margin-top: ${(props) => props.mgTop && props.mgTop};
  margin-bottom: ${(props) => props.mgBottom && props.mgBottom};
  ${(props) =>
    props.size === "single"
      ? css`
          grid-template-columns: 1fr;
        `
      : css`
          grid-template-columns: repeat(
            auto-fill,
            minmax(
              ${(props) => (props.size ? `${props.size},1fr` : "20rem,1fr")}
            )
          );
        `}
  grid-gap: ${(props) => props.gap && props.gap};
  grid-row-gap: ${(props) => props.rowGap && props.rowGap};
  grid-column-gap: ${(props) => props.columGap && props.columGap};
  margin-top: ${(props) => props.mgTop && props.mgTop};
  margin-bottom: ${(props) => props.mgBottom && props.mgBottom};
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;

export default GridWrapper;
