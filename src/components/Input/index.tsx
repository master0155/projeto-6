import { Container, Label, InputContainer } from "./style"
type Props = {
  label: string
}
export const Input = ({label,}:Props) =>{
  return(
    <Container>
      <Label>{label}</Label>
      <InputContainer />
    </Container>
  )
}
