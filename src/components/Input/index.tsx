import { ChangeEvent, HTMLInputTypeAttribute } from "react"
import { Container, ErrorText, InputContainer, Label } from "./style"

type Props = {
  label: string
  value?: string
  type?: HTMLInputTypeAttribute
  maxLength?: number
  inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search"
  placeholder?: string
  error?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  label,
  value,
  type = 'text',
  maxLength,
  inputMode,
  placeholder,
  error,
  onChange
}: Props) => {
  return(
    <Container>
      <Label>{label}</Label>
      <InputContainer
        type={type}
        value={value}
        maxLength={maxLength}
        inputMode={inputMode}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  )
}
