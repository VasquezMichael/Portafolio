import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  .Swiper-Container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .Swiper-img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .image {
      width: 80%;
      object-fit: cover;
      border-radius: 1rem;
    }
  }

  .slider-controler .slider-arrow::after {
    color: #000;
    opacity: 0.8;
    font-size: 2rem;
  }
  .slider-arrow {
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
  @media screen and (min-width: 690px) {
    margin-top: 0px;

    .Swiper-img-container {
      width: 50%;
      height: 100%;
    }
  }
`;
