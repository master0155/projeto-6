import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container, Section, SectionTitle } from './style'
import logo from '../../assets/images/logo.svg'
import { useGetRestaurantesQuery } from '../../services/api'

export const Home = () => {
  const { data: restaurants = [], isLoading, isError } = useGetRestaurantesQuery()

  return (
    <>
      <Header>
        <img className="home-logo" src={logo} alt="efood" />
      </Header>
      <Section className="container">
        <SectionTitle>Todos os restaurantes</SectionTitle>
        <Container>
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
      </Section>
      <Footer />
    </>
  )
}
