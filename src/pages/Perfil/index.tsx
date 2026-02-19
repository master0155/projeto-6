import { Link } from 'react-router-dom'
import { CardFood } from '../../components/CardFood'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Button, Container, Description } from './style'
import logo from '../../assets/images/logo.svg'
import { useState } from 'react'
import { CardFloat } from '../../components/CardFloat'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar } from '../../store/reducers/carrinhoReducer'
import { Plate } from '../../models/plate'
import { Right } from '../../components/Right'
import { Cart } from '../../components/Cart'
import { Delivery } from '../../components/Delivery'
import { Pay } from '../../components/Pay'
import { Order } from '../../components/Order'
import { useNavigate, useParams } from 'react-router-dom'


export const Perfil = () => {
  const items = useSelector((state: RootReducer) => state.products.items)
  const itemsCart = useSelector((state: RootReducer) => state.carrinho.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {restaurant} = useParams()


  const [isDisheOpen, setIsDishOpen] = useState(false)
  const [cartOpen, setCartOpen ] = useState(false)
  const [adress, setAdress ] = useState(false)
  const [pay, setPay] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [plate, setPlate] = useState<Plate>()

  function handleClick(item: Plate){
    setIsDishOpen(true)
    setPlate(item)
  }

  function handleAddToCart(plate: Plate){
    dispatch(adicionar(plate))
    alert("item adicionado ao carrinho!")
  }
  function goToCart(){
    setPay(false)
    setAdress(false)
    setCartOpen(true)
  }
  function goToPay(){
    setAdress(false)
    setCartOpen(false)
    setPay(true)
  }
  function goToAdress(){
    setAdress(true)
    setCartOpen(false)
    setPay(false)
  }
  function goToOrderFinished(){
    setIsFinished(true)
  }

  return (
    <Container>
      <Header>
        <div className="links">
          <div className="container">
            <Link to={'/'}>Restaurantes</Link>
            <img src={logo} alt="efood" />
            <Button onClick={goToCart}>
              <span>{itemsCart.length}</span> produto(s) no carrinho
            </Button>
          </div>
        </div>
        <Description>
          <div className="container">
            <span>{restaurant}</span>
            <h3>La Dolce Vita Trattoria</h3>
          </div>
        </Description>
      </Header>
      <div className="container">
        {items && items.map(item =>(
          <CardFood
            key={item.id}
            plate={item}
            onclick={() => handleClick(item)}
          />
        ))}
      </div>
      {isDisheOpen &&
        plate &&
          <CardFloat
            plate={plate}
            AddCart={() => handleAddToCart(plate)}
            onclose={()=> setIsDishOpen(false)}
          />
      }
      {cartOpen &&<Right onclick={() => setCartOpen(false)}><Cart onclick={goToAdress}/></Right>}
      {adress && <Right onclick={() => setAdress(false)}><Delivery onPay={goToPay} onBackToCart={goToCart}/></Right>}
      {pay && <Right onclick={() => setPay(false)}><Pay onPay={goToOrderFinished} onBack={goToAdress}/></Right> }
      {isFinished && <Right onclick={() => setIsFinished(false)}><Order backToHome={() =>navigate('/')}/></Right> }
      <Footer />
    </Container>
  )
}
