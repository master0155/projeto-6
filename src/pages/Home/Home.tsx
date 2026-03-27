import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container, Section, SectionTitle } from './style'
import logo from '../../assets/images/logo.svg'
import { useGetOnSaleQuery } from '../../services/api'
import { useMemo } from 'react'

export const Home = () => {
  const {
    data: featuredRestaurants = [],
    isLoading: isLoadingFeatured,
    isError: isErrorFeatured
  } = useGetOnSaleQuery()

  const uniqueFeaturedRestaurants = useMemo(() => {
    const uniqueMap = new Map(
      featuredRestaurants.map((restaurant) => [restaurant.id, restaurant])
    )
    return Array.from(uniqueMap.values())
  }, [featuredRestaurants])

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
          {uniqueFeaturedRestaurants.map((restaurant) => (
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
      <Footer />
    </>
  )
}
