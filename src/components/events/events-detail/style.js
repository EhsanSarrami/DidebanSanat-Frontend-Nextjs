import styled from "styled-components";

export const EventsDetailContainer = styled.div`
  width: 1024px;
  
  .events-detail-image {
    position: relative;
    width: 100%;
    height: 660px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3em;

    & img {
      border-radius: 8px;
    }

    @media (max-width: 992px) {
      height: 540px;
    }

    @media (max-width: 768px) {
      height: 420px;
    }

    @media (max-width: 480px) {
      height: 320px;
    }

    @media (max-width: 360px) {
      height: 280px;
    }
  }
  .events-detail-header {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    grid-gap: 0.8em;
    color: ${(props) => props.theme.textSecoundary};
    font-size: 1.05rem;
    & h4 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .event-detail-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0.9em 0;
    color: ${(props) => props.theme.textPrimary};
  }
  .events-detail-body {
    color: ${(props) => props.theme.textSecoundary};
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 2.1rem;
    margin-bottom: 2em;
  }
`;
