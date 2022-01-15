import styled from "styled-components";

export const BlogCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${({ theme }) => theme.bgTertiary};
  overflow: hidden;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) -20px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  .blog-card-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    & img {
      transition: all 0.5s ease;
    }

    &:hover {
      & img {
        transform: scale(1.1);
        filter: hue-rotate(-60deg);
      }
    }
  }

  .blog-card-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1.2em 1.8em 2em;

    .blog-card__date {
      font-size: 0.9rem;
      font-weight: 700;
      color: ${(props) => props.theme.textSecoundary};
      margin-top: 0.6em;
    }

    .blog-card__title {
      font-size: 1.2rem;
      font-weight: 700;
      color: ${(props) => props.theme.textPrimary};
      margin-top: 0.4em;
      transition: 0.5s;

      &:hover {
        color: ${(props) => props.theme.primaryColor};
      }
    }
  }
`;
