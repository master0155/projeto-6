import { Container, Description, Link, Sotials } from './style'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

export const Footer = () => {
  return (
    <Container>
      <img src={logo} alt="efood" />
      <Sotials>
        <li>
          <Link href="#">
            <img src={instagram} alt="instagram" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src={facebook} alt="facebook" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <img src={twitter} alt="twitter" />
          </Link>
        </li>
      </Sotials>
      <Description>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Description>
    </Container>
  )
}
