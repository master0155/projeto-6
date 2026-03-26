import { Button } from "../Button"
import { Input } from "../Input"
import { CepNumber, Container, ErrorMessage, Last, NumberAndCvv, Title } from "./style"
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Plate } from '../../models/plate'
import { formatPrice } from '../../utils/format'
import { useState } from "react"

export type PaymentFormData = {
  cardName: string
  cardNumber: string
  cvv: string
  month: string
  year: string
}

type Props = {
  onPay: (data: PaymentFormData) => void
  onBack: () => void
  initialData: PaymentFormData
  isLoading: boolean
  errorMessage: string
}
export const Pay = ({onPay, onBack, initialData, isLoading, errorMessage}:Props) => {
  const itemsCart = useSelector((state: RootReducer) => state.carrinho.items)
  const total = itemsCart.reduce((acc: number, item: Plate) => acc + item.value, 0)
  const [cardName, setCardName] = useState(initialData.cardName)
  const [cardNumber, setCardNumber] = useState(initialData.cardNumber)
  const [cvv, setCvv] = useState(initialData.cvv)
  const [month, setMonth] = useState(initialData.month)
  const [year, setYear] = useState(initialData.year)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validateForm() {
    const nextErrors: Record<string, string> = {}
    const currentYear = new Date().getFullYear()
    const monthValue = Number(month)
    const yearValue = Number(year)

    if (!cardName.trim()) {
      nextErrors.cardName = 'O campo e obrigatorio'
    } else if (cardName.trim().length < 5) {
      nextErrors.cardName = 'O nome precisa ter pelo menos 5 caracteres'
    }

    if (!cardNumber) {
      nextErrors.cardNumber = 'O campo e obrigatorio'
    } else if (cardNumber.length !== 16) {
      nextErrors.cardNumber = 'Numero do cartao deve ter 16 digitos'
    }

    if (!cvv) {
      nextErrors.cvv = 'O campo e obrigatorio'
    } else if (cvv.length !== 3) {
      nextErrors.cvv = 'CVV deve conter 3 numeros'
    }

    if (!month) {
      nextErrors.month = 'O campo e obrigatorio'
    } else if (month.length !== 2 || monthValue < 1 || monthValue > 12) {
      nextErrors.month = 'Mes invalido'
    }

    if (!year) {
      nextErrors.year = 'O campo e obrigatorio'
    } else if (year.length !== 4 || yearValue < currentYear) {
      nextErrors.year = 'Ano invalido'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleFinishPayment() {
    if (validateForm()) {
      onPay({
        cardName,
        cardNumber,
        cvv,
        month,
        year
      })
    }
  }

  return(
    <Container>
      <Title>Pagamento - Valor a pagar <span>{formatPrice(total)}</span></Title>
      <Input
        label="Nome no cartao"
        value={cardName}
        onChange={({ target }) => setCardName(target.value)}
        error={errors.cardName}
      />
      <NumberAndCvv>
        <Input
          label="Numero do cartao"
          value={cardNumber}
          maxLength={16}
          inputMode="numeric"
          onChange={({ target }) => setCardNumber(target.value.replace(/\D/g, ''))}
          error={errors.cardNumber}
        />
        <Input
          label="CVV"
          value={cvv}
          maxLength={3}
          inputMode="numeric"
          onChange={({ target }) => setCvv(target.value.replace(/\D/g, ''))}
          error={errors.cvv}
        />
      </NumberAndCvv>
      <CepNumber>
        <Input
          label="Mes de vencimento"
          value={month}
          maxLength={2}
          inputMode="numeric"
          onChange={({ target }) => setMonth(target.value.replace(/\D/g, ''))}
          error={errors.month}
        />
        <Input
          label="Ano de vencimento"
          value={year}
          maxLength={4}
          inputMode="numeric"
          onChange={({ target }) => setYear(target.value.replace(/\D/g, ''))}
          error={errors.year}
        />
      </CepNumber>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Last>
        <Button onclick={handleFinishPayment} disabled={isLoading}>
          {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
        </Button>
        <Button onclick={onBack} disabled={isLoading}>Voltar para a edição de endereço</Button>
      </Last>
    </Container>
  )
}
