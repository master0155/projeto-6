import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import { Comfirm, Container, PlateComponent, Price, Title, Trash, ValueToPay } from "./style"
import { FaRegTrashAlt } from "react-icons/fa";
import { RootReducer } from "../../store";
import { Plate } from "../../models/plate";
import { remover } from '../../store/reducers/carrinhoReducer'
import { formatPrice } from '../../utils/format'


type Props = {
  onclick: () => void
}
export const Cart = ({onclick}:Props) => {
  const itemsCart = useSelector((state: RootReducer) => state.carrinho.items)

  const dispatch = useDispatch()

  const total: number = itemsCart.reduce((total: number, produto: Plate) => total + produto.value, 0);
  return(
    <Container>
      {itemsCart &&
        itemsCart.map((plate) => (
          <PlateComponent key={plate.id}>
            <img src={plate.image} />
            <div>
              <Title>{plate.title}</Title>
              <Trash onClick={() => dispatch(remover(plate))}><FaRegTrashAlt /></Trash>
              <Price>{formatPrice(plate.value)}</Price>
            </div>
          </PlateComponent>
          )
        )
      }
      <Comfirm>
        <ValueToPay> <span>Valor total</span>{formatPrice(total)}</ValueToPay>
        <Button onclick={onclick} >Continuar com a entrega</Button>
      </Comfirm>
    </Container>
  )
}
