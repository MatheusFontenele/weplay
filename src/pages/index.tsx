import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import { api } from 'service/api'
import GameCard from 'src/components/GameCard'
import Header from 'src/components/Header'
import Navbar from 'src/components/Navbar'
import Sidebar from 'src/components/Sidebar'
import { SliderImages } from 'src/components/Slider'

import { Container } from '../styles/style'
interface gamesProps {
  name: string
  card: string
}

interface homeProps {
  games: gamesProps[]
}

export default function Home({ games }: homeProps) {
  const settings = {
    className: 'center',
    infinite: true,
    swipeToSlide: true,
    dots: false,
    speed: 500,
    slidesToShow: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 7,

          infinite: true
        }
      },
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 6,

          infinite: true
        }
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5,

          infinite: true
        }
      },
      {
        breakpoint: 1529,
        settings: {
          slidesToShow: 4,

          infinite: true
        }
      },
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 3,

          infinite: true
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,

          initialSlide: 2
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      }
    ]
  }

  return (
    <Container>
      <Header />
      <SliderImages />
      <div className="slider">
        <div
          className="cardNav"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '18px',
            marginBottom: '12px',
            marginLeft: '60px',
            marginRight: '60px'
          }}
        >
          <strong>RECOMENDADOS</strong>
          <a href="">Ver mais</a>
        </div>
        <Slider {...settings}>
          {games.map(game => {
            return (
              <GameCard key={game.name}>
                <img
                  src={game.card}
                  alt={game.name}
                  style={{ borderRadius: '12px' }}
                />
              </GameCard>
            )
          })}
        </Slider>
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/recomendacao')

  const data = response.data.jogos

  const games = data.map((game: gamesProps) => {
    return {
      name: game.name,
      card: game.card
    }
  })
  return {
    props: {
      games
    }
  }
}
