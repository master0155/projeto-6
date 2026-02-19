import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './style'
import logo from '../../assets/images/logo.svg'

const restaurants = [
  {
    id: 1,
    tag: 'italiana',
    image: 'https://s2-casaejardim.glbimg.com/XX096G6-JjB-CJuBRqmxpcZBSg4=/0x0:1200x724/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2023/A/Y/Qv2aleQFAYE6ZumGjI0g/2022-02-18-nonna-rosa-5.jpeg',
    title: 'La Dolce Vita Trattoria',
    note: '4.6',
    description: `
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!
        `
  },
  {
    id: 2,
    tag: 'brasileira',
    image: 'https://vejasp.abril.com.br/wp-content/uploads/2016/11/img_1588.jpeg?quality=70&strip=info',
    title: 'Fogo de Chão',
    note: '4.6',
    description: `
    O Fogo de Chão é um renomado restaurante brasileiro especializado em churrascaria rodízio. Com origens no Rio Grande do Sul, o Fogo de Chão oferece uma experiência autêntica de carnes grelhadas, servidas diretamente na mesa por espeto. Os cortes suculentos, o ambiente
        `
  },
  {
    id: 3,
    tag: 'portuguesa',
    image: 'https://hardecor.com.br/wp-content/uploads/2018/03/avillez-belcanto-Copy.jpg',
    title: 'Português: Belcanto',
    note: '4.6',
    description: `
    O Belcanto é um restaurante estrelado localizado em Lisboa, Portugal. Sob a chefia do talentoso José Avillez, o Belcanto oferece uma experiência gastronômica sofisticada e contemporânea. Seu menu degustação apresenta pratos inspirados na culinária tradicional
        `
  },
  {
    id: 4,
    tag: 'mexicana',
    image: 'https://images.squarespace-cdn.com/content/v1/63bcee2d8ab2cd47fb1169cf/1673326300437-RY2AOM8P5HIDF351ALYP/Screen+Shot+2022-11-17+at+9.55.45+PM.png',
    title: 'Mexicano: Pujol',
    note: '4.6',
    description: `
    O Pujol, situado na Cidade do México, é um dos restaurantes mexicanos mais prestigiados do mundo. O chef Enrique Olvera combina tradições culinárias ancestrais com técnicas contemporâneas para criar pratos inovadores e saborosos.
        `
  }
]

export const Home = () => {
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
            food={restaurant.tag}
            image={restaurant.image}
            tag={restaurant.tag}
            note={restaurant.note}
            title={restaurant.title}
            description={restaurant.description}
          />
        ))}
      </Container>
      <Footer />
    </>
  )
}
