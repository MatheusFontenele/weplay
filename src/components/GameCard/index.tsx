import { ReactNode } from 'react'

import { Container } from './styles'

interface GameCardProps {
  children: ReactNode
}

function GameCard({ children }: GameCardProps) {
  return (
    <Container>
      {children}
      <button>Entrar</button>
    </Container>
  )
}

export default GameCard
