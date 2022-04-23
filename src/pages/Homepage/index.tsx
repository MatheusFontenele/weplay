import { ReactNode } from 'react'
import Header from 'src/components/Header'
import Navbar from 'src/components/Navbar'
import Sidebar from 'src/components/Sidebar'
import SliderImage from 'src/components/Slider'
import { Container, HomeContent } from './styles'

function Homepage() {
  return (
    <Container>
      <Navbar />
      <HomeContent>
        <Header />
        <SliderImage />
        <h1>homepage</h1>
      </HomeContent>
      <Sidebar />
    </Container>
  )
}

export default Homepage
