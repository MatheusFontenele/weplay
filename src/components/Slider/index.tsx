import { ReactNode } from 'react'
import Slider from 'react-slick'

import { Container, SlideContainer, SliderHeader } from './styles'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

import codBanner from 'public/images/cod.png'
import lolBanner from 'public/images/lolbanner.jpg'
import vavaBanner from 'public/images/valorantbanner.jpg'

interface SliderProps {
  children: ReactNode
}

function SliderImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }
  return (
    <Container>
      <SliderHeader {...settings}>
        <SlideContainer>
          <Image src={codBanner} width={1440} height={600} />
        </SlideContainer>
        <SlideContainer>
          <Image src={lolBanner} width={1440} height={600} objectFit="cover" />
        </SlideContainer>
        <SlideContainer>
          <Image src={vavaBanner} width={1440} height={600} />
        </SlideContainer>
      </SliderHeader>
    </Container>
  )
}

export default SliderImage
