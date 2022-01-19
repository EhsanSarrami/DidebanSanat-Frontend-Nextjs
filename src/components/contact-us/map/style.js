import styled from "styled-components";

const ContactUsMapWrapper = styled.div`
  position: relative;
  width: 45%;
  height: 570px;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  & svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.primaryColor};
  }

  @media (max-width: 992px) {
    width: 100%;
    height: 300px;
    margin-top: 8em;
  }
`;

export default ContactUsMapWrapper;
