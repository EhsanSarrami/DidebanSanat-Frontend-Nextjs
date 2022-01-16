import styled from "styled-components";

const FormMapWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export default FormMapWrapper;
