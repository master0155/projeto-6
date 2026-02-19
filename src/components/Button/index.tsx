import { Container } from "./style"
type Props = {
  children: string
  onclick: () => void
}
  export const Button = ({children, onclick}:Props) =>{
  return(<Container onClick={onclick} >{children}</Container>)
}

