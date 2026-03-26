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
import { adicionar, limpar } from '../../store/reducers/carrinhoReducer'
import { Plate } from '../../models/plate'
import { Right } from '../../components/Right'
import { Cart } from '../../components/Cart'
import { Delivery, DeliveryFormData } from '../../components/Delivery'
import { Pay, PaymentFormData } from '../../components/Pay'
import { Order } from '../../components/Order'
import { useNavigate, useParams } from 'react-router-dom'
import { setItems } from '../../store/reducers/productsReducer'
import { Banner } from '../../components/Banner'
import { useCheckoutMutation, useGetRestauranteByTipoQuery } from '../../services/api'

const initialDeliveryData: DeliveryFormData = {
  receiver: '',
  address: '',
  city: '',
  cep: '',
  number: '',
  complement: ''
}

const initialPaymentData: PaymentFormData = {
  cardName: '',
  cardNumber: '',
  cvv: '',
  month: '',
  year: ''
}

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
  const [deliveryData, setDeliveryData] = useState(initialDeliveryData)
  const [paymentData, setPaymentData] = useState(initialPaymentData)
  const [orderId, setOrderId] = useState('')
  const [checkoutError, setCheckoutError] = useState('')
  const { data: restaurantsByType } = useGetRestauranteByTipoQuery(restaurant ?? '', {
    skip: !restaurant
  })
  const [checkout, { isLoading: isCheckoutLoading }] = useCheckoutMutation()
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
    setCheckoutError('')
    setCartOpen(true)
  }
  function goToPay(data: DeliveryFormData){
    setDeliveryData(data)
    setAdress(false)
    setCartOpen(false)
    setCheckoutError('')
    setPay(true)
  }
  function goToAdress(){
    setAdress(true)
    setCartOpen(false)
    setCheckoutError('')
    setPay(false)
  }
  async function goToOrderFinished(data: PaymentFormData){
    setPaymentData(data)
    setCheckoutError('')

    try {
      const response = await checkout({
        products: itemsCart.map((item) => ({
          id: item.id,
          price: item.value
        })),
        delivery: {
          receiver: deliveryData.receiver,
          address: {
            description: deliveryData.address,
            city: deliveryData.city,
            zipCode: deliveryData.cep,
            number: Number(deliveryData.number),
            complement: deliveryData.complement
          }
        },
        payment: {
          card: {
            name: data.cardName,
            number: data.cardNumber,
            code: Number(data.cvv),
            expires: {
              month: Number(data.month),
              year: Number(data.year)
            }
          }
        }
      }).unwrap()

      dispatch(limpar())
      setOrderId(response.orderId)
      setPay(false)
      setAdress(false)
      setCartOpen(false)
      setIsFinished(true)
    } catch {
      setCheckoutError('Nao foi possivel finalizar o pedido. Tente novamente.')
    }
  }

  function backToHome(){
    setIsFinished(false)
    setDeliveryData(initialDeliveryData)
    setPaymentData(initialPaymentData)
    setOrderId('')
    setCheckoutError('')
    navigate('/')
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
      {adress && <Right onclick={() => setAdress(false)}><Delivery initialData={deliveryData} onPay={goToPay} onBackToCart={goToCart}/></Right>}
      {pay && <Right onclick={() => !isCheckoutLoading && setPay(false)}><Pay initialData={paymentData} isLoading={isCheckoutLoading} errorMessage={checkoutError} onPay={goToOrderFinished} onBack={goToAdress}/></Right> }
      {isFinished && <Right onclick={() => setIsFinished(false)}><Order orderId={orderId} backToHome={backToHome}/></Right> }
      <Footer />
    </Container>
  )
}
