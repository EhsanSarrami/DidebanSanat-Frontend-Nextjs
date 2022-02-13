import styled from "styled-components";

export const ContentNotFoundWrapper = styled.div`
  flex-direction: column;
  margin: ${(props) => (props.margin ? props.margin : "14em auto")};
  text-align: center;
  color: ${({ theme }) => theme.textTertiary};
  & svg {
    font-size: 12rem;
  }

  & p {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 1.2em;
  }
`;
