import { Button } from "../Button"
import { Input } from "../Input"
import { CepNumber, Container, Last, Title } from "./style"
type Props = {
  onPay: () => void
  onBackToCart: () => void
}

export const Delivery = ({onBackToCart, onPay}:Props) => {

  return(
    <Container>
      <Title>Entrega</Title>
      <Input label="Quem irá receber"/>
      <Input label="Endereço"/>
      <Input label="Cidade"/>
      <CepNumber>
        <Input label="CEP"/>
        <Input label="Número"/>
      </CepNumber>
      <Input label="Complemento (opcional)"/>
      <Last>
        <Button onclick={onPay}>Continuar com o pagamento</Button>
        <Button onclick={onBackToCart}>Voltar para o carrinho</Button>
      </Last>
    </Container>
  )
}
