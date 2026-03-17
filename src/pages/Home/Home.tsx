import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './style'
import logo from '../../assets/images/logo.svg'
import { useEffect, useState } from 'react'

type Restaurant = {
  id: number
  tipo: string
  capa: string
  titulo: string
  avaliacao: number
  descricao: string
}

export const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    async function loadRestaurants() {
      try {
        const res = await fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
        const data = await res.json()
        setRestaurants(data)
      } catch (error) {
        console.error('Erro ao carregar restaurantes', error)
      }
    }

    loadRestaurants()
  }, [])

  return (
    <>
      <Header>
        <img src={logo} alt="efood" />
        <div>
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </div>
      </Header>
      <Container className="container">
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            food={restaurant.tipo}
            image={restaurant.capa}
            tag={restaurant.tipo}
            note={restaurant.avaliacao.toString()}
            title={restaurant.titulo}
            description={restaurant.descricao}
          />
        ))}
      </Container>
      <Footer />
    </>
  )
}
