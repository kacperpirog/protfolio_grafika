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
    cursor: pointer;
    :hover {
      transform: scale(1.5);
    }
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

export const StyledDivGallery2 = styled.div`
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .gallery img {
    width: 100%;
    max-width: 500px;
    height: 500px;
    object-fit: contain;
    margin-bottom: 5px;
    :hover {
      transform: scale(1.1);
    }
  }

  .thumbnails {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .thumbnails img {
    width: 50px;
    height: 50px;
    margin: 0 10px;
    object-fit: cover;
    cursor: pointer;
  }

  .thumbnails img.active {
    border: 2px solid blue;
  }

  @media (max-width: 767px) {
    .gallery {
      flex-direction: column;
    }
    .thumbnails img {
      width: 50px;
      height: 50px;
      margin: 0 10px;
      object-fit: cover;
      cursor: pointer;
    }

    .gallery img {
      height: 300px;
    }

    .thumbnails {
      justify-content: flex-start;
    }
  }
`;
