import { Title } from "../Card/style"
import { Button } from "../CardFood/style"
import { ButtonClose, Card, Container } from "./style"
import { IoClose } from "react-icons/io5";
import { Plate } from "../../models/plate";
type Props = {
  onclose: () => void
  AddCart: () => void
  plate: Plate
}

export const CardFloat = ({ plate, AddCart, onclose}:Props) =>{
  return(
    <Container>
      <Card>
        <ButtonClose onClick={onclose}><IoClose /></ButtonClose>
        <img src={plate.image} alt="pizza" />
        <div>
          <div>
            <Title>{plate.title}</Title>
            <p>{plate.description}</p>
            <span>Serve: de 2 a 3 pessoas</span>
          </div>
          <Button onClick={AddCart}>Adicionar ao carrinho - R$ {plate.value}</Button>
        </div>
      </Card>
    </Container>
  )
}
