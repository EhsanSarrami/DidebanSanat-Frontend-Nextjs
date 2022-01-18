import styled from "styled-components";

export const ImageSectionWrapper = styled.div`
  position: relative;
  width: 1024px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image-section__current-image {
    position: relative;
    width: 100%;
    height: 660px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);

    .react-transform-wrapper,
    .react-transform-component {
      position: relative;
      width: 100%;
      height: 100%;
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
  .image-section-grid {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
    grid-gap: 2em;
    margin-top: 3em;

    .image-section-grid__img {
      position: relative;
      width: 100%;
      height: 130px;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
      grid-gap: 1em;
    }
  }
`;
