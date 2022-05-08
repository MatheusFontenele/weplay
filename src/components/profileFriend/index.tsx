import { ReactNode } from 'react'

import { Container } from './styles'

interface ProfileFriendProps {
  children: ReactNode
}

function ProfileFriend({ children }: ProfileFriendProps) {
  return <Container>{children}</Container>
}

export default ProfileFriend
