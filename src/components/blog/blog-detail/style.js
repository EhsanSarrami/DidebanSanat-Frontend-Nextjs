import styled from "styled-components";

export const BlogDetailContainer = styled.div`
  width: 1024px;

  .blog-detail-image {
    position: relative;
    width: 100%;
    height: 660px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5em;

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
  .blog-detail-header {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    justify-items: flex-start;
    grid-gap: 1em;
    color: ${(props) => props.theme.textSecoundary};
    font-size: 1.05rem;
    & h4 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .blog-detail-title {
    color: ${(props) => props.theme.textPrimary};
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0.9em 0;
  }
  .blog-detail-body {
    color: ${(props) => props.theme.textSecoundary};
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 2.1rem;
    margin-bottom: 2em;
  }
`;
