import { ReactNode } from 'react'
import { HeaderContainer } from './style'
type Props = {
  children: ReactNode
}

export const Header = ({ children }: Props) => {
  return <HeaderContainer>{children}</HeaderContainer>
}
