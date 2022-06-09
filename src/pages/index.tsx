import type { GetStaticProps } from 'next'

import Image from 'next/image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import Header from 'src/components/Header/Header'
import Sidebar from 'src/components/Sidebar/Sidebar'
import { api } from 'src/service/api'
import { Container } from 'src/styles/style'
import LolBanner from '/public/images/lol-slider.png'

//#region interfaces
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
//#endregion

export default function Home() {
  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  }
  return (
    <Container>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <main>
          <div className="banner">
            <Image src={LolBanner} />
          </div>
        </main>
      </div>
    </Container>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await api.get('/recomendacao')
//   const friends = await api.get('/social', {
//     params: {
//       _limit: 8
//     }
//   })

//   const data = response.data.jogos
//   const friendsData = friends.data.friends

//   const games = data.map((game: gamesProps) => {
//     return {
//       name: game.name,
//       card: game.card
//     }
//   })

//   const friend = friendsData.map((friend: friendsProps) => {
//     return {
//       id: friend.id,
//       email: friend.email,
//       username: friend.username,
//       profile: {
//         name: friend.profile.name,
//         team: friend.profile.team,
//         dob: friend.profile.dob,
//         about: friend.profile.about
//       },
//       roles: friend.roles,
//       favorteGames: friend.favorteGames,
//       createdAt: friend.createdAt,
//       updatedAt: friend.updatedAt
//     }
//   })

//   const allFriends = friend.slice(0, 8)

//   return {
//     props: {
//       games,
//       allFriends
//     }
//   }
// }
