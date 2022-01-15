import styled from "styled-components";

export const ServiceCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${(props) => props.theme.bgTertiary};
  border-radius: 12px;
  overflow: hidden;
  padding: 4em;
  transition: 0.5s;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  & ::-webkit-scrollbar {
    display: none;
  }

  &:hover {
    &::after {
      opacity: 1;
      visibility: visible;
    }
  }

  .service-card__title {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${(props) => props.theme.textPrimary};
    margin-bottom: 0.8em;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }

  .service-card__description {
    font-size: 0.9rem;
    color: ${(props) => props.theme.textTertiary};
    margin-bottom: 1em;
    font-weight: 700;
  }

  .service-card__image {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &::after {
    content: "${(props) => props.affterContent}";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.bgQuaternary};
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2em;
    transition: all 0.5s 0.3s;
    opacity: 0;
    visibility: hidden;
    color: ${(props) => props.theme.textPrimary};
    font-size: 1.05rem;
    font-weight: 700;
    text-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    overflow-y: auto;

    & p {
      color: ${(props) => props.theme.white};
      font-size: 1.1rem;
      font-weight: 700;
    }
  }
`;
