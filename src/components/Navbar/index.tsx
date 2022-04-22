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
      <Image src={logo} width={100} height={100} />
      <Menu
        style={{
          paddingBottom: '6px',
          paddingTop: '12px',
          marginBottom: 12,
          borderBottom: '1px solid #616161'
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
      <Menu>
        <Button>
          <Image src={lolImage} width={40} height={40} />
        </Button>
        <Button>
          <Image src={valorantIcon} width={40} height={40} />
        </Button>
        <Button>
          <Image src={csIcon} width={40} height={40} />
        </Button>
        <Button>
          <BiPlus color="yellow" />
        </Button>
      </Menu>
    </Container>
  )
}

export default Navbar
