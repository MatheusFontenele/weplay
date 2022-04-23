import { ReactNode } from 'react'
import Navbar from 'src/components/Navbar'
import Sidebar from 'src/components/Sidebar'
import SliderImage from 'src/components/Slider'
import { Container, HomeContent } from './styles'

function Homepage() {
  return (
    <Container>
      <Navbar />
      <HomeContent>
        <SliderImage />
        <h1>homepage</h1>
      </HomeContent>
      <Sidebar />
    </Container>
  )
}

export default Homepage
