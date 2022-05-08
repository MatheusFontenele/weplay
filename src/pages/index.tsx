import type { GetStaticProps, NextPage } from 'next'

import Slider from 'react-slick'
import { api } from 'service/api'
import GameCard from 'src/components/GameCard'
import Header from 'src/components/Header'

import { SliderImages } from 'src/components/Slider'

import { Container } from '../styles/style'

interface gamesProps {
  name: string
  card: string
}

interface roles {
  role: string
}

interface favoriteGames {
  games: string
}

interface friendsProps {
  id: string
  email: string
  username: string
  profile: {
    name: string
    team: string
    dob: string
    about: string
  }
  roles: roles[]
  favorteGames: favoriteGames[]
  createdAt: string
  updatedAt: string
}

interface homeProps {
  games: gamesProps[]
  allFriends: friendsProps[]
}

export default function Home({ games, allFriends }: homeProps) {
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
        <div className="cardNav">
          <strong>GAMES RECOMENDADOS</strong>
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

      <div className="social">
        <div className="cardNav">
          <strong>CONHECA NOVAS PESSOAS</strong>
          <a href="">Ver mais</a>
        </div>
        <div className="friendsArea"></div>
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/recomendacao')
  const friends = await api.get('/social', {
    params: {
      _limit: 9
    }
  })

  const data = response.data.jogos
  const friendsData = friends.data.friends

  const games = data.map((game: gamesProps) => {
    return {
      name: game.name,
      card: game.card
    }
  })

  const allFriends = friendsData.map((friend: friendsProps) => {
    return {
      id: friend.id,
      email: friend.email,
      username: friend.username,
      profile: {
        name: friend.profile.name,
        team: friend.profile.team,
        dob: friend.profile.dob,
        about: friend.profile.about
      },
      roles: friend.roles,
      favorteGames: friend.favorteGames,
      createdAt: friend.createdAt,
      updatedAt: friend.updatedAt
    }
  })

  return {
    props: {
      games,
      allFriends
    }
  }
}
