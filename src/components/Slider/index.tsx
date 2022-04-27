import { Container, LogoSerie, PosterSerie, SliderHeader } from './styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import GameCard from '../GameCard'

const SliderImages = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <SliderHeader {...settings}>
      <Container>
        <a>
          <PosterSerie src="/images/eradogelo-slider.jpeg" alt="Era do gelo" />
          <LogoSerie src="/images/logo-eradogelo.png" alt="logo era do gelo" />
        </a>
      </Container>
      <Container>
        <a>
          <PosterSerie src="/images/mandalore-slider.jpeg" alt="mandalore" />
          <LogoSerie src="/images/logo-mandalore.png" alt="logo mandalore" />
        </a>
      </Container>
      <Container>
        <a>
          <PosterSerie src="/images/encanto-slider.jpeg" alt="encanto" />
          <LogoSerie src="/images/logo-encanto.png" alt="logo encanto" />
        </a>
      </Container>
    </SliderHeader>
  )
}

const SliderCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0
  }
  return (
    <Slider {...settings}>
      <GameCard>
        <div style={{ background: 'red', height: '100%', marginLeft: 12 }}>
          1
        </div>
      </GameCard>
      <GameCard>
        <div style={{ background: 'red', height: '100%' }}>2</div>
      </GameCard>
      <GameCard>
        <div style={{ background: 'red', height: '100%' }}>3</div>
      </GameCard>
      <GameCard>
        <div style={{ background: 'red', height: '100%' }}>4</div>
      </GameCard>
      <GameCard>
        <div style={{ background: 'red', height: '100%' }}>5</div>
      </GameCard>
      <GameCard>
        <div style={{ background: 'red', height: '100%' }}>6</div>
      </GameCard>
      <GameCard>
        <div style={{ background: 'red', height: '100%' }}>7</div>
      </GameCard>
      <GameCard>
        <div style={{ background: 'red', height: '100%' }}>8</div>
      </GameCard>
      <GameCard>
        <div style={{ background: 'red', height: '100%' }}>8</div>
      </GameCard>
      <GameCard>
        <div style={{ background: 'red', height: '100%' }}>8</div>
      </GameCard>
      <GameCard>
        <div style={{ background: 'red', height: '100%' }}>8</div>
      </GameCard>
      <GameCard>
        <div style={{ background: 'red', height: '100%' }}>8</div>
      </GameCard>
    </Slider>
  )
}

export { SliderImages, SliderCards }
