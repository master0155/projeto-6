import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container, Section, SectionTitle } from './style'
import logo from '../../assets/images/logo.svg'
import { useGetOnSaleQuery, useGetRestaurantesQuery } from '../../services/api'

export const Home = () => {
  const { data: restaurants = [], isLoading, isError } = useGetRestaurantesQuery()
  const {
    data: featuredRestaurants = [],
    isLoading: isLoadingFeatured,
    isError: isErrorFeatured
  } = useGetOnSaleQuery()

  return (
    <>
      <Header>
        <img src={logo} alt="efood" />
        <div>
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </div>
      </Header>

      <Section className="container">
        <SectionTitle>Destaques</SectionTitle>
        <Container>
          {isLoadingFeatured && <p>Carregando destaques...</p>}
          {isErrorFeatured && <p>Erro ao carregar destaques.</p>}
          {featuredRestaurants.map((restaurant) => (
            <Card
              key={`featured-${restaurant.id}`}
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
