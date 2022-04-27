import styled from 'styled-components'
import Slider from 'react-slick'

export const SliderHeader = styled(Slider)`
  margin: 9vh 15vh;
  margin-top: 110px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    display: none !important;
  }

  .slick-next {
    display: none !important;
  }

  .slick-slide:not(.slick-active) {
    opacity: 0.5;
  }
`

export const SliderCardHeader = styled(Slider)``

export const Container = styled.div`
  cursor: pointer;
  border-radius: 4px;
  a {
    border-radius: 4px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
      rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;

    &:hover {
      border: 4px solid rgb(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`

export const PosterSerie = styled.img`
  width: 100%;
  height: 100%;
`

export const LogoSerie = styled.img`
  inset: 0px;
  display: block;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  position: absolute;
  transition: opacity 500ms ease-in-out 0s;
  width: 100%;
`
