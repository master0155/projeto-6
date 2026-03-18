import { Button } from "../Button"
import { Input } from "../Input"
import { CepNumber, Container, Last, NumberAndCvv, Title } from "./style"
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Plate } from '../../models/plate'
import { formatPrice } from '../../utils/format'
type Props = {
  onPay: () => void
  onBack: () => void
}
export const Pay = ({onPay, onBack}:Props) => {
  const itemsCart = useSelector((state: RootReducer) => state.carrinho.items)
  const total = itemsCart.reduce((acc: number, item: Plate) => acc + item.value, 0)

  return(
    <Container>
      <Title>Pagamento - Valor a pagar <span>{formatPrice(total)}</span></Title>
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
