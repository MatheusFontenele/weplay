import { ReactNode } from 'react'
import { BiBell } from 'react-icons/bi'
import { FaViacoin } from 'react-icons/fa'
import Button from '../Button'
import SearchBar from '../SearchBar'

import { Container } from './styles'

interface HeaderProps {
  children: ReactNode
}

function Header() {
  return (
    <Container>
      <button> Fast mach </button>

      <SearchBar />

      <div className="profileOptions">
        <button>
          <FaViacoin />
          1234 CR
        </button>
        <Button>
          <BiBell />
        </Button>
      </div>
    </Container>
  )
}

export default Header
