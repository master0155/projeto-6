import { Link } from 'react-router-dom'
import { Container, Title, Description, Tag } from './style'
import { FaStar } from 'react-icons/fa'

export type Props = {
  tag: string
  image: string
  title: string
  note: string
  description: string
  food: string
}

export const Card = ({ tag, image, title, note, description, food }: Props) => {
  return (
    <Container>
      <Tag>{tag}</Tag>
      <img src={image} />
      <div>
        <Title>
          {' '}
          {title}{' '}
          <span>
            {note} <FaStar />
          </span>
        </Title>
        <Description>{description}</Description>
        <Link to={`/perfil/${food}`}>Saiba mais</Link>
      </div>
    </Container>
  )
}
