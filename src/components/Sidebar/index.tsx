import { ReactNode } from 'react'
import Image from 'next/image'

import Button from '../Button'

import profilePhoto from 'public/cavaleiro-da-lua.png'
import khonshu from 'public/deus-da-lua-konshu.png'
import steven from 'public/steven-grant.png'
import ammit from 'public/ammit.png'

import { Container } from './styles'
import { Menu } from '../Navbar/styles'
import { BiLogOut } from 'react-icons/bi'

interface SidebarProps {
  children: ReactNode
}

function Sidebar() {
  return (
    <Container>
      <Button>
        <Image src={profilePhoto} height={50} width={50} />
      </Button>
      <Menu
        style={{
          margin: '6px 0',
          paddingTop: 12,
          borderTop: '1px solid #5a5a5a'
        }}
      >
        <span>SOCIAL</span>
        <Button>
          <Image src={steven} height={50} width={50} />
        </Button>
        <Button>
          <Image src={khonshu} height={50} width={50} />
        </Button>
        <Button>
          <Image src={ammit} height={50} width={50} />
        </Button>
      </Menu>

      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end'
        }}
      >
        <Button>
          <BiLogOut />
        </Button>
      </div>
    </Container>
  )
}

export default Sidebar
