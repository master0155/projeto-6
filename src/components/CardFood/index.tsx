import { Button, Container, Description, Title } from './style'
type Props = {
  onclick: () => void
  plate: {
    image: string,
    title: string,
    description: string,
  }
}

export const CardFood = ({onclick, plate}:Props) => {

  return (
    <Container>
      <img src={plate.image} alt="pizza" />
      <Title>{plate.title}</Title>
      <Description>{plate.description}</Description>
      <Button onClick={onclick}>Adicionar ao carrinho</Button>
    </Container>
  )
}
