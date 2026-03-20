import { BannerContainer } from './style'

type Props = {
    backgroundImage?: string
    category?: string
    title?: string
}

export const Banner = ({ backgroundImage, category, title }: Props) => {
    return (
    <BannerContainer $backgroundImage={backgroundImage}>
        <div className="container">
        <span>{category}</span>
        <h3>{title}</h3>
        </div>
    </BannerContainer>
)
}
