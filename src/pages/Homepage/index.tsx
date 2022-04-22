import { ReactNode } from 'react'
import Navbar from 'src/components/Navbar'
import { Container } from './styles'

function Homepage() {
  return (
    <Container>
      <Navbar />
      <h1>homepage</h1>
    </Container>
  )
}

export default Homepage
