import Slider from 'react-slick'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1980px;
  width: 100%;

  display: flex;
  justify-content: center;

  border-radius: 12px;
`
export const SliderHeader = styled(Slider)`
  margin: 9px 15px;
  margin-top: 30px;

  border-radius: 4px;
  overflow: hidden;
  max-width: 1620px;
  width: 100%;
  height: 550px;

  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 150, 171);
    }
  }

  li.slick-active button::before {
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

export const Banner = styled.img``

export const SlideContainer = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 12px;

  display: flex;
  justify-content: center;
`
