import { ReactNode } from 'react'
import { BiBell } from 'react-icons/bi'
import { GiCometSpark } from 'react-icons/gi'
import Button from '../Button'
import SearchBar from '../SearchBar'

import { Container } from './styles'

interface HeaderProps {
  children: ReactNode
}

function Header() {
  return (
    <Container>
      <button className="searchMach"> FAST MACH </button>

      <SearchBar />

      <div className="profileOptions">
        <button className="coinButton">
          <GiCometSpark />
          <strong>CR 1234</strong>
        </button>
        <Button>
          <BiBell />
        </Button>
      </div>
    </Container>
  )
}

export default Header
