import { ReactNode } from 'react'

import { BiBell } from 'react-icons/bi'
import { GiCometSpark } from 'react-icons/gi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { RiMenu2Line } from 'react-icons/ri'

import Button from '../Button'
import SearchBar from '../SearchBar'

import { Container, HeaderContent, Profile } from './styles'

interface HeaderProps {
  children: ReactNode
}

function Header() {
  return (
    <Container>
      <HeaderContent>
        <div
          className="menu"
          style={{
            display: 'flex',
            justifyContent: 'flex-start'
          }}
        >
          <Button>
            <RiMenu2Line />
          </Button>
          <button className="searchMach"> FAST MACH </button>
        </div>

        <SearchBar />

        <div className="profileOptions">
          <button className="coinButton">
            <GiCometSpark />
            <strong>CR 1234</strong>
          </button>
          <Button>
            <BiBell />
          </Button>

          <Profile>
            <img src="/deus-da-lua-konshu.png" alt="profile photo" />
            <span>Piend</span>
            <IoMdArrowDropdown />
          </Profile>
        </div>
      </HeaderContent>
    </Container>
  )
}

export default Header
