import { Button } from "../Button"
import { Input } from "../Input"
import { CepNumber, Container, Last, NumberAndCvv, Title } from "./style"
type Props = {
  onPay: () => void
  onBack: () => void
}
export const Pay = ({onPay, onBack}:Props) => {
  return(
    <Container>
      <Title>Pagamento - Valor a pagar R$ <span>190,90</span></Title>
      <Input label="Nome no cartão"/>
      <NumberAndCvv>
        <Input label="Número do cartão"/>
        <Input label="CVV"/>
      </NumberAndCvv>
      <CepNumber>
        <Input label="Mês de vencimento"/>
        <Input label="Ano de vencimento"/>
      </CepNumber>
      <Last>
        <Button onclick={onPay}>Finalizar pagamento</Button>
        <Button onclick={onBack}>Voltar para a edição de endereço</Button>
      </Last>
    </Container>
  )
}
