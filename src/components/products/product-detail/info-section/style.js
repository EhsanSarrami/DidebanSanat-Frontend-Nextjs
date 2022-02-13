import styled from "styled-components";

export const InfoSectionWrapper = styled.div`
  width: 1024px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10.5em;
`;

export const InfoSectionTab = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-gap: 1em;
  margin-bottom: 4em;
  padding: 2em 0;
  border-radius: 14px;
  @media (max-width: 768px) {
    margin-bottom: 1em;
  }
`;

export const InfoSectionTabItem = styled.li`
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0.4em 0;
  border-radius: 6px;
  color: ${(props) =>
    props.active ? props.theme.white : props.theme.textPrimary};
  background: ${(props) =>
    props.active ? props.theme.primaryColor : "transparent"};
  cursor: pointer;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
  @media (max-width: 385px) {
    padding: 0.6em 0;
  }

  & a {
    color: ${(props) =>
      props.active ? props.theme.white : props.theme.textPrimary};
    background: ${(props) =>
      props.active ? props.theme.primaryColor : "transparent"};
  }
`;

export const InfoSectionCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .info-section-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
  }
  .info-section-fetures,
  .info-section-desc {
    color: ${(props) => props.theme.textSecoundary};
    font-size: 1.1rem;
    font-weight: 700;
    margin-top: 2em;
    line-height: 2.8rem;
  }
  .info-section-specifications {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .section-specifications__item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1.2em 0;
    @media (max-width: 576px) {
      flex-direction: column;
    }
    &:not(:last-child) {
      border-bottom: 1px solid ${(props) => props.theme.borderSecoundary};
    }
    .specifications-item__title {
      color: ${(props) => props.theme.textPrimary};
    }
    .specifications-item__content {
      color: ${(props) => props.theme.textSecoundary};
      @media (max-width: 576px) {
        margin-top: 1em;
      }
    }
  }
`;
