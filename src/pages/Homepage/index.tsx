import { ReactNode } from 'react'

import { Container } from './styles'

interface HomepageProps {
  children: ReactNode
}

function Homepage() {
  return (
    <Container>
      <h1>Homepage</h1>
    </Container>
  )
}

export default Homepage
