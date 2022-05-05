import { Container, LogoSerie, PosterSerie, SliderHeader } from './styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderImages = () => {
  const settings = {
    dots: false,
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

export { SliderImages }
