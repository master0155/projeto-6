import { Button } from "../Button"
import { Input } from "../Input"
import { CepNumber, Container, Last, Title } from "./style"
import { useState } from "react"

export type DeliveryFormData = {
  receiver: string
  address: string
  city: string
  cep: string
  number: string
  complement: string
}

type Props = {
  onPay: (data: DeliveryFormData) => void
  onBackToCart: () => void
  initialData: DeliveryFormData
}

export const Delivery = ({onBackToCart, onPay, initialData}:Props) => {
  const [receiver, setReceiver] = useState(initialData.receiver)
  const [address, setAddress] = useState(initialData.address)
  const [city, setCity] = useState(initialData.city)
  const [cep, setCep] = useState(initialData.cep)
  const [number, setNumber] = useState(initialData.number)
  const [complement, setComplement] = useState(initialData.complement)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validateForm() {
    const nextErrors: Record<string, string> = {}
    const onlyCepDigits = cep.replace(/\D/g, '')

    if (!receiver.trim()) {
      nextErrors.receiver = 'O campo e obrigatorio'
    } else if (receiver.trim().length < 5) {
      nextErrors.receiver = 'O nome precisa ter pelo menos 5 caracteres'
    }

    if (!address.trim()) {
      nextErrors.address = 'O campo e obrigatorio'
    }

    if (!city.trim()) {
      nextErrors.city = 'O campo e obrigatorio'
    }

    if (!onlyCepDigits) {
      nextErrors.cep = 'O campo e obrigatorio'
    } else if (onlyCepDigits.length !== 8) {
      nextErrors.cep = 'CEP deve conter 8 numeros'
    }

    if (!number.trim()) {
      nextErrors.number = 'O campo e obrigatorio'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleContinueToPay() {
    if (validateForm()) {
      onPay({
        receiver,
        address,
        city,
        cep,
        number,
        complement
      })
    }
  }

  return(
    <Container>
      <Title>Entrega</Title>
      <Input
        label="Quem ira receber"
        value={receiver}
        onChange={({ target }) => setReceiver(target.value)}
        error={errors.receiver}
      />
      <Input
        label="Endereco"
        value={address}
        onChange={({ target }) => setAddress(target.value)}
        error={errors.address}
      />
      <Input
        label="Cidade"
        value={city}
        onChange={({ target }) => setCity(target.value)}
        error={errors.city}
      />
      <CepNumber>
        <Input
          label="CEP"
          value={cep}
          maxLength={8}
          inputMode="numeric"
          onChange={({ target }) => setCep(target.value.replace(/\D/g, ''))}
          error={errors.cep}
        />
        <Input
          label="Numero"
          value={number}
          inputMode="numeric"
          onChange={({ target }) => setNumber(target.value.replace(/\D/g, ''))}
          error={errors.number}
        />
      </CepNumber>
      <Input
        label="Complemento (opcional)"
        value={complement}
        onChange={({ target }) => setComplement(target.value)}
      />
      <Last>
        <Button onclick={handleContinueToPay}>Continuar com o pagamento</Button>
        <Button onclick={onBackToCart}>Voltar para o carrinho</Button>
      </Last>
    </Container>
  )
}
