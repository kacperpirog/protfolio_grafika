import styled from "styled-components";

export const StyledDivGallery = styled.div`
  width: 80vw;
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .gallery-item {
    width: calc(33.33% - 20px);
    display: inline-block;
    margin: 10px;
    text-align: center;
  }
  .gallery-item img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .gallery-item {
      width: calc(50% - 20px);
    }
  }

  @media (max-width: 576px) {
    .gallery-item {
      width: 100%;
    }
  }
`;
