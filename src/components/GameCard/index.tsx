import { ReactNode } from 'react'

import { Container } from './styles'

interface GameCardProps {
  children: ReactNode
}

function GameCard({ children }: GameCardProps) {
  return (
    <Container>
      <button>
        {children}
        <div className="playersCount">
          <span>
            Players: <strong>128</strong>
          </span>
        </div>
      </button>
    </Container>
  )
}

export default GameCard
