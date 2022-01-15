import styled from "styled-components";

const SubmitButtonBtn = styled.button`
  width: auto;
  font-family: "faFont";
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  padding: ${(props) => props.space};
  color: ${(props) => props.theme.white};
  background: linear-gradient(
      95deg,
      #059dff 15%,
      #6549d5 45%,
      #e33fa1 75%,
      #fb5343
    )
    95%/200% 100%;
  text-shadow: 1px 1px 6px rgb(0 0 0 / 25%);
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  transition: all 0.5s ease;

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

export default SubmitButtonBtn;
