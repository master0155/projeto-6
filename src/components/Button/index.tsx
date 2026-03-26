import { ReactNode } from "react"
import { Container } from "./style"

type Props = {
  children: ReactNode
  onclick: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export const Button = ({ children, onclick, type = 'button', disabled = false }: Props) => {
  return(
    <Container type={type} onClick={onclick} disabled={disabled}>
      {children}
    </Container>
  )
}

