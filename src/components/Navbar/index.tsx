import { ReactNode } from 'react'
import Image from 'next/image'

import Button from '../Button'

import { BiHomeAlt, BiTrophy, BiJoystick, BiPlus } from 'react-icons/bi'

import lolImage from '../../../public/lolicon.png'
import valorantIcon from '../../../public/valkoran.png'
import csIcon from '../../../public/cs-global-logo.png'
import logo from '../../../public/Blue_and_Black.png'

import { Container, Menu } from './styles'

interface NavbarProps {
  children: ReactNode
}

function Navbar() {
  return (
    <Container>
      <Menu
        style={{
          paddingBottom: '6px',
          paddingTop: '12px',
          marginBottom: 12,
          marginTop: 12
        }}
      >
        <Button>
          <BiHomeAlt />
        </Button>
        <Button>
          <BiJoystick />
        </Button>
        <Button>
          <BiTrophy />
        </Button>
      </Menu>
    </Container>
  )
}

export default Navbar
