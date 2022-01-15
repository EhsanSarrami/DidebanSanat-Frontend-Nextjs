import styled from "styled-components";

export const LatestBlogPostsContainer = styled.section`
  flex-direction: column;
  margin-top: 12.5em;
`;

export const LatestBlogPostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  align-items: flex-start;
  grid-gap: 3.5em;

  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;
