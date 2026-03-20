import React from 'react'
import { Link } from 'react-router-dom'
import { CardFood } from '../../components/CardFood'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Button, Container } from './style'
import logo from '../../assets/images/logo.svg'
import { useState, useEffect } from 'react'
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
import { setItems } from '../../store/reducers/productsReducer'
import { Banner } from '../../components/Banner'
import { useGetRestauranteByTipoQuery } from '../../services/api'

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
  const { data: restaurantsByType } = useGetRestauranteByTipoQuery(restaurant ?? '', {
    skip: !restaurant
  })
  const restaurantData = restaurantsByType?.[0] ?? null

  function handleClick(item: Plate){
    setIsDishOpen(true)
    setPlate(item)
  }

  useEffect(() => {
    if (!restaurantData) {
      dispatch(setItems([]))
      return
    }

    const mapped = restaurantData.cardapio.map(
      (p) => new Plate(p.id, p.foto, p.nome, p.descricao, p.preco)
    )
    dispatch(setItems(mapped))
  }, [restaurantData, dispatch])

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
        <Banner
          backgroundImage={restaurantData?.capa}
          category={restaurantData?.tipo ?? restaurant}
          title={restaurantData?.titulo ?? ''}
        />
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
