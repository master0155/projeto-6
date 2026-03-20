import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './style'
import logo from '../../assets/images/logo.svg'
import { useGetRestaurantesQuery } from '../../services/api'

export const Home = () => {
  const { data: restaurants = [], isLoading, isError } = useGetRestaurantesQuery()

  return (
    <>
      <Header>
        <img src={logo} alt="efood" />
        <div>
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </div>
      </Header>
      <Container className="container">
        {isLoading && <p>Carregando restaurantes...</p>}
        {isError && <p>Erro ao carregar restaurantes.</p>}
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
