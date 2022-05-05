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

interface gamesProps {
  name: string
  card: string
}

interface homeProps {
  games: gamesProps[]
}

export default function Home({ games }: homeProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1529,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div>
      <Navbar />
      <Header />
      <SliderImages />
      <div
        className="slider"
        style={{ margin: '0 auto', display: 'flex', flexDirection: 'column' }}
      >
        <div
          className="cardNav"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '18px',
            marginBottom: '12px'
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
      <Sidebar />
    </div>
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
